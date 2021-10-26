/// <reference types="Cypress" />

describe("userExperience", () => {
  it("should visit Home Page", () => {
    cy.visit("https://alexis-lemaire-cv.herokuapp.com/");
  });

  it("should seek for navbar links", () => {
    cy.get("nav a span").contains("CV");
    cy.get("nav a span").contains("Ajout projet");
    cy.get("nav button span").contains("Motivations");
  });

  it("should check navbar links are working", () => {
    cy.get(".v-dialog");
    cy.get("nav button").contains("Motivations").click();
    cy.get(".v-dialog");
  });
});
