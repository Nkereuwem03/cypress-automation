describe("http requests", () => {
  it("GET", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
      .its("status")
      .should("equal", 200);
  });

  it("POST", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "new post",
        body: "creating new post...",
        userId: 2,
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("PUT", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "updated post",
        body: "updating post...",
        userId: 2,
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("DELETE", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });
});
