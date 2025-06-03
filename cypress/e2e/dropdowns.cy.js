describe("Dropdown Menu Interactions", function () {
  // this.timeout(60000)

  it.skip("should select an option from a dynamic dropdown", () => {
    cy.visit("https://www.google.com");
    cy.get(".gLFyf").type("cypress automation");
    cy.get("div.wM6W7d>span").should("be.visible").should("have.length.greaterThan", 0);
    cy.get("div.wM6W7d>span").each(($el) => {
      if ($el.text() === "cypress automation") {
        cy.wrap($el).click();
      }
    });
  });

  it("should select a country from a standard dropdown", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("body").should("be.visible");
    cy.get("form").should("exist");
    cy.get("#zcf_address_country")
      .select("Nigeria")
      .should("have.value", "Nigeria");
  });

  it("should select a country from a custom dropdown", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application", {
      timeout: 600000,
    });
    cy.get("body").should("be.visible");
    cy.get("form").should("exist");
    cy.get("#select2-billing_country-container").click();
    cy.get("input[role='combobox']", { timeout: 600000 })
      .type("Italy")
      .type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });

  it("should select a suggestion from an auto-suggest dropdown", function () {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("university of nige");
    cy.get(".suggestion-title").contains("University of Nigeria").click();
  });
});