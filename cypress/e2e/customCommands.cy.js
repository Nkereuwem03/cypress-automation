// click on links using label
// overwrite existing contain() commands
// re-useable custom commands

describe("Custom Cypress Commands", () => {
  it("should handle link clicks using a custom command", () => {
    cy.loginApp("https://www.saucedemo.com/", "standard_user", "secret_sauce");
    cy.clickLink("Sauce Labs Bike Light");
  });

  it("should overwrite the existing contain command for case-insensitive matching", () => {
    cy.loginApp("https://www.saucedemo.com/", "standard_user", "secret_sauce");
    cy.clickLink("SAUCE LABS BIKE LIGHT");
  });
});