describe("OrangeHRM Login with Fixtures", () => {
  // direct access
  it("should log in with hardcoded credentials", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type('Admin');
    cy.get("input[placeholder='Password']").type('admin123');
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', 'Dashboard');
  });

  it("should log in using fixture data with cy.fixture().then", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.fixture('orangehrm').then((user) => {
      cy.get("input[placeholder='Username']").type(user.username);
      cy.get("input[placeholder='Password']").type(user.password);
      cy.get("button[type='submit']").click();
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', user.expected);
    });
  });

  // Access through hooks - for multiple it blocks
  let user;

  beforeEach(() => {
    cy.fixture('orangehrm').then((data) => {
      user = data;
    });
  });

  it("should log in using fixture data loaded in beforeEach hook", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder='Username']").type(user.username);
    cy.get("input[placeholder='Password']").type(user.password);
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', user.expected);
  });

  beforeEach(() => {
    cy.fixture("orangehrm").as("user");
  });

  it("should log in using fixture data with alias in beforeEach hook", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder='Username']").type(this.user.username);
    cy.get("input[placeholder='Password']").type(this.user.password);
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      this.user.expected
    );
  });
});