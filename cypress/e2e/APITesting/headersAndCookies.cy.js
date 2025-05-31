describe("Simple Books API - Headers and Cookies", () => {
  let accessToken;
  let bookId;
  let clientName = Math.random().toString(5).substring(2);
  let clientEmail = Math.random().toString(5).substring(2) + "@example.com";
  const customerName = Math.random().toString(5).substring(2);

  before("should generate access token before tests", () => {
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/api-clients/",
      body: {
        clientName,
        clientEmail,
      },
    }).then((response) => {
      expect(response.body).has.property("accessToken");
      accessToken = response.body.accessToken;
    });
  });

  it("should submit an order", () => {
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        bookId: 1,
        customerName,
      },
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body).have.property("orderId");
      bookId = response.body.orderId;
    });
  });

  it("should get a single book order", () => {
    cy.request({
      method: "GET",
      url: `https://simple-books-api.glitch.me/orders/${bookId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body).has.property("customerName", customerName);
    });
  });
});