describe("OrangeHRM Data-Driven Login Tests", () => {
  it("should perform login attempts with multiple user credentials from fixture", () => {
    cy.fixture("orangehrm2").then((userData) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      userData.forEach((user) => {
        cy.wait(5000)
        cy.get("input[placeholder='Username']").type(user.username);
        cy.get("input[placeholder='Password']").type(user.password);
        cy.get("button[type='submit']").click();
        if (user.username === "Admin" && user.password === "admin123") {
          cy.get(
            ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
          ).should("have.text", user.expected);
          cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
          cy.wait(5000).get("ul[role='menu']").should("be.visible");
          cy.get(
            "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
          ).click();
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
            "have.text",
            user.expected
          );
        }
        cy.wait(5000);
      });
    });
  });
});