class Login {
  username = "input[placeholder='Username']";
  password = "input[placeholder='Password']";
  submitBtn = "button[type='submit']";
  labelText = ".oxd-topbar-header-breadcrumb > .oxd-text";

  setUsername(username) {
    cy.get(this.username).type(username);
  }

  setPassword(password) {
    cy.get(this.password).type(password);
  }

  clickSubmit() {
    cy.get(this.submitBtn).click();
  }

  verifyLogin() {
    cy.get(this.labelText).should("have.text", "Dashboard");
  }
}

export default Login;
