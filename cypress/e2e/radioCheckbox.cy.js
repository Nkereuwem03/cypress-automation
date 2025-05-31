describe("Radio Button Interactions", function () {
  it("should check and validate the state of radio buttons", function () {
    cy.visit("https://qa-automation-practice.netlify.app/radiobuttons");

    cy.get("#radio-button1")
      .should("be.visible")
      .and("not.be.disabled")
      .check()
      .should("be.checked");

    cy.get("#radio-button2")
      .should("be.visible")
      .and("not.be.disabled")
      .check()
      .should("be.checked");

    cy.get("#radio-button3")
      .should("be.visible")
      .and("not.be.disabled")
      .check()
      .should("be.checked");

    cy.get("#radio-button4")
      .should("be.visible")
      .and("be.disabled")
      .and("not.be.checked");
  });
});