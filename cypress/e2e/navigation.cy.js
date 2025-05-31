describe("Navigation", () => {
  it("should navigate back, forward, and reload pages correctly", () => {
    cy.visit("https://practice-automation.com/");
    cy.title().should("eq", "Learn and Practice Automation | automateNow");
    cy.contains(
      "a.wp-block-button__link.wp-element-button",
      "Form Fields"
    ).click();
    cy.get("h1").should("have.text", "Form Fields");
    cy.go("back");
    cy.title().should("eq", "Learn and Practice Automation | automateNow");
    cy.go("forward");
    cy.go(-1);
    cy.title().should("eq", "Learn and Practice Automation | automateNow");
    cy.go(1);
    cy.get("h1").should("have.text", "Form Fields");
    cy.reload();
  });
});