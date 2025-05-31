import "cypress-iframe";

describe("Mouse Operations", () => {
  it("should display text on hover", () => {
    cy.visit("https://practice-automation.com/");
    cy.get(
      ":nth-child(3) > :nth-child(6) > .wp-block-button > .wp-block-button__link"
    ).click();
    cy.get("#mouse_over")
      .should("not.have.text", "You did it!")
      .trigger("mouseover")
      .should("have.text", "You did it!")
      .trigger("mouseout")
      .should("have.text", "Mouse over me");
  });

  it("should perform right-click and select copy", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    cy.get(".context-menu-icon-copy > span").should("be.visible").click();
  });

  it("should perform double-click inside iframe", () => {
    cy.visit(
      "https://w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3",
      { timeout: 6000000 }
    );
    cy.frameLoaded("#iframeResult");
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("not.have.value", "Hello World!");

    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .trigger("dblclick");

    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });
});