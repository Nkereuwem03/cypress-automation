describe("OrangeHRM Login Page Title", () => {
  it("should display the correct page title", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });

  it("should not display an incorrect page title", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("not.equal", "OrangeHRm Live");
  });
});
