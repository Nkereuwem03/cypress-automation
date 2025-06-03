import Login from "../pageObjectModel/loginPage2";

const login = new Login();

describe("OrangeHRM Login - Page Object Model", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  // General approach (skipped)
  it("should log in using direct selectors", () => {
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  });

  // POM approach with fixtures
  it("should log in using the page object model and fixture data", () => {
    cy.fixture("orangehrm").then((data) => {
      login.setUsername(data.username);
      login.setPassword(data.password);
      login.clickSubmit();
      login.verifyLogin(data.expected);
    });
  });
});