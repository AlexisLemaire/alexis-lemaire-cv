/// <reference types="Cypress" />

describe("userExperience", () => {
  it("should visit Home Page", () => {
    // cy.visit("http://localhost:3000/");
    cy.visit("https://alexis-lemaire-cv.herokuapp.com/");
  });

  it("should seek for navbar links and visit ajout projet page", () => {
    cy.get("nav a span").contains("CV");
    cy.get("nav a span").contains("Ajout projet").click();
    cy.visit("https://alexis-lemaire-cv.herokuapp.com/addProject");
    cy.get("form");
  });

  it('should check ajout projet form is working', () => {
    cy.get("input").eq(0).type("FakeKey");
    cy.get("input").eq(1).type("FakeTitle");
    cy.get("input").eq(2).type("FakeClient");
    cy.get("input").eq(3).type("FakeDesc");
    cy.get("input").eq(4).type("FakeLink");
    cy.get("input").eq(5).type("FakeGithub");
    cy.get("input").eq(6).type("FakeGithubAPI");
    cy.get("input").eq(7).type("FakeFrontendTechs");
    cy.get("input").eq(8).type("FakeBackendTechs");
    cy.get(".v-select__slot").eq(0).type("Maintenu{enter}");
    cy.get(".v-select__slot").eq(1).type("Non{enter}");
    cy.get(".v-picker td").eq(25).click();
    cy.get("form button").contains("Ajouter").click();
    cy.get("form button").contains("Ajouter").click();
    cy.get(".v-alert");
  });
});
