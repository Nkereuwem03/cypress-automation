describe("parsing JSON response", () => {
  it("parsing simple JSON response", () => {
    cy.request("GET", "https://fakestoreapi.com/products").then((response) => {
      expect(response.status).equal(200);
      expect(response.body).has.length(20);
      expect(response.body[0]).has.property("id", 1);
      expect(response.body[0]).has.property(
        "title",
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      );
      expect(response.body[0]).has.property("price", 109.95);
      expect(response.body[0]).has.property(
        "description",
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
      );
      expect(response.body[0]).has.property("category", "men's clothing");
      expect(response.body[0].image).equal(
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      );
      expect(response.body[0]).has.nested.property("rating.rate", 3.9);
      expect(response.body[0].rating.count).equal(120);
    });
  });

  it("parsing complex JSON response", () => {
    let totalPrice = 0;

    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      qs: {
        limit: 5,
      },
    }).then((response) => {
      expect(response.status).equal(200);

      response.body.forEach((element, index) => {
        if (index === 4) {
          expect(element.id).equal(5);
        }
        totalPrice += element.price;
      });

      expect(totalPrice).equal(899.23);
    });
  });
});