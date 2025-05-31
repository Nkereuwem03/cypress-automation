describe("Checkbox Interactions", () => {
  beforeEach(() => {
    cy.visit("https://qa-automation-practice.netlify.app/checkboxes");
    cy.get("button[type='reset']").click();
    cy.get("input[type='checkbox']").should("be.visible").uncheck().and("not.be.checked");
  });

  it("should check and uncheck a single checkbox", () => {
    cy.get("input#checkbox1")
      .should("be.visible")
      .and("not.be.checked")
      .check()
      .and("be.checked")
      .uncheck()
      .and("not.be.checked");
  });

  it("should check and uncheck all checkboxes", () => {
    cy.get("input[type='checkbox']")
      .check()
      .should("be.checked")
      .uncheck()
      .and("not.be.checked");
  });

  it("should check and uncheck the first checkbox only", () => {
    cy.get("input[type='checkbox']")
      .first()
      .check()
      .should("be.checked")
      .uncheck()
      .and("not.be.checked");
  });
});