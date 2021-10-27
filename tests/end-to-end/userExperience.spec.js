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
    cy.get("nav button span").contains("Motivations").click();
    cy.get(".v-dialog");
    cy.get("h2").click();
    cy.get("nav a span").contains("Ajout projet").click();
    cy.get("form");
  });

  it('should check ajout projet form is working', () => {
    cy.get("input").eq(0).type("FakeKey");
    cy.get("input").eq(1).type("FakeTitle");
    cy.get("input").eq(2).type("FakeDesc");
    cy.get("input").eq(3).type("FakeLink");
    cy.get("input").eq(4).type("FakeGithub");
    cy.get("input").eq(5).type("FakeGithubAPI");
    cy.get("input").eq(6).type("FakeFrontendTechs");
    cy.get("input").eq(7).type("FakeBackendTechs");
    cy.get(".v-select__slot").type("Maintenu{enter}");
    cy.get(".v-picker td").eq(25).click();
    cy.get("form button").contains("Ajouter").click();
    cy.get(".v-alert");
  });
});
