describe("JSONPlaceholder API Chaining", () => {
  it("should fetch all posts and retrieve comments for the first post", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        expect(response.status).equal(200);
        const postId = response.body[0].id;
        return postId;
      })
      .then((postId) => {
        cy.request({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/comments",
          qs: {
            postId,
          },
        }).then((response) => {
          expect(response.status).equal(200);
          expect(response.body).has.length(5);
        });
      });
  });
});