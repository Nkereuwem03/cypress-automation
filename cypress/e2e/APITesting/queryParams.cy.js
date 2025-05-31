describe("API Testing", () => {
  it("should return users for the specified page when passing query parameters", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      qs: {
        page: 2,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.property("page", 2);
      expect(response.body.page).equal(2);
      expect(response.body.data).has.length(6);
      expect(response.body.data[0]).has.property(
        "email",
        "michael.lawson@reqres.in"
      );
    });
  });
});