/// <reference types="cypress" />

describe('learn about locator', () => {
    it("visit google home page", () => {
        cy.visit("https://www.google.de/");
    })
    it("can locate a button on the page", () => {
        //cy.get('input');
        //cy.get('#L2AGLb > .QS5gu');
        //cy.get('.gLFyf');
        //cy.get('input[title="Search"]');
        cy.get('[name="q"]', { timeout: 5000 }).should("be.visible").should("have.class", "gLFyf").and("have.value", "")
        .and("have.attr", "maxlength", "2048");
    })
})