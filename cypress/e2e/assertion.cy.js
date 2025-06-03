describe("OrangeHRM Login Page Assertions", () => {
  it("performs implicit assertions on login page elements and navigation", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url()
      .should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("contain", "orangehrm")
      .and("not.equal", "admin@");
    cy.title().should("include", "OrangeHRM");
    cy.get(".orangehrm-login-branding > img", { timeout: 10000 })
      .should("be.visible")
      .and("exist");
    cy.get("a").should("have.length", "5");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Username']").should("have.value", "Admin");
    cy.get("[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
  });

  it.skip
  ("performs explicit assertions on logged-in user dropdown name", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("[name='password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expectedName = "manda user";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actualName = x.text();

      // BDD Style
      expect(actualName).to.equal(expectedName);
      expect(actualName).to.not.equal("expectedName");

      // TDD Style
      assert.equal(actualName, expectedName);
      assert.notEqual(actualName, "expectedName");
    });
  });
});
