describe("api chaining", () => {
  let authToken = `Bearer 44722819920703088cbf161127cfab13e0694e88dc5f84259856c4dc2f405ddd`;
  const email = Math.random().toString(5).substring(2) + "@example.com";

  it("create, read, update, delete user in gorest api", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      body: {
        name: "John Doe",
        email,
        gender: "male",
        status: "active",
      },
      headers: {
        Authorization: authToken,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body).has.property("id");
      const userId = response.body.id;
      cy.request({
        method: "PUT",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        body: {
          name: "Scott",
        },
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
      }).then((response) => {
        expect(response.status).equal(200);
        expect(response.body.name).equal("Scott");
        cy.request({
          method: "DELETE",
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: {
            Authorization: authToken,
          },
        }).then((response) => {
          expect(response.status).equal(204);
        });
      });
    });
  });
});
