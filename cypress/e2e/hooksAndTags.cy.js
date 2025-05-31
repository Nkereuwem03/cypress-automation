describe("Hooks and Tags Demo", () => {
  // Demonstrates usage of Cypress hooks and test tags

  before(() => {
    cy.log("*** Launching the application ***");
  });

  after(() => {
    cy.log("*** Closing the application ***");
  });

  beforeEach(() => {
    cy.log("*** Logging in ***");
  });

  afterEach(() => {
    cy.log("*** Logging out ***");
  });

  it("should perform a basic search", () => {
    cy.log("*** Performing search ***");
  });

  it("should perform an advanced search", () => {
    cy.log("*** Performing advanced search ***");
  });

  it("should list products", () => {
    cy.log("*** Listing products ***");
  });
});