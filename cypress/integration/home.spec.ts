/// <reference types="cypress" />

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("https://www.etsy.com/");
  });

  it("should have logo visible", function () {
    cy.get("#logo > svg").should("be.visible");
  });

  it("should have a newsletter section", function () {
    cy.get("#email-list-signup-email-input").should(
      "have.attr",
      "placeholder",
      "Enter your email",
    );
  });

  it("should have search input", function () {
    cy.get("#global-enhancements-search-query").should(
      "have.attr",
      "placeholder",
      "Search for anything",
    );
  });

  it("should have signin button visible", function () {
    cy.get(".wt-display-flex-xs > :nth-child(1) > .wt-btn").should(
      "be.visible",
    );
  });
});
