describe("Form Fields", () => {
  it("should fill out and submit the form successfully", () => {
    cy.visit("https://practice-automation.com/");
    cy.contains(
      "a.wp-block-button__link.wp-element-button",
      "Form Fields"
    ).click();
    cy.get("input#name-input").type("Nkereuwem Udoudo");
    cy.get("input[type='password']").type("Nkereuwemudoudo1.");
    cy.get("#drink1").check();
    cy.get("select#automation").select("yes");
    cy.get("#email").type("nkereuwem.udoudo1@gmail.com");
    cy.get("textarea#message").type("Automation learning platform");
    cy.get("#submit-btn").click();
  });
});