describe("Screenshot and Video Capture in Cypress", function () {
  it("captures screenshots manually", function () {
    cy.visit("https://practice-automation.com/");
    cy.screenshot("homepage");
    cy.get(".wp-image-12372.sp-no-webp").screenshot("form field icon");
  });

  // automatically capture screenshot & video on failure - only when you execute through CLI

  it("captures screenshots and videos automatically on test failure", function () {
    cy.visit("https://practice-automation.com/");
    cy.contains(
      "a.wp-block-button__link.wp-element-button",
      "Form Fields"
    ).click();
    cy.get("h1").should("have.text", "Form Fields");
  });
});