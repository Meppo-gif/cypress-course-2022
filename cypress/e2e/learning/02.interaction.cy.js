/// <reference types="cypress" />

describe("interacting with input field", () => {
    it.skip("visit google home page", () => {
        cy.visit("https://google.com");
    });

    it.skip("click on input field and see search suggestion dropdown",()=> {
        cy.get('.jw8mI').scrollTo('bottom');
        cy.get('#L2AGLb').click();
        cy.get("[name='q']").click();

        //Use the const
        /*const searchDropdownBefore = cy.get('.gLFyf');
        searchDropdownBefore.type('d');
        searchDropdownBefore.should('be.visible');
        searchDropdownBefore.click();*/
        
        //  Use the as
       /* cy.get(".gLFyf").as('searchDropdown');
        cy.get("@searchDropdown").type('d');
        cy.get("@searchDropdown").should('be.visible');
        cy.get("@searchDropdown").click();*/

        cy.get('.gLFyf').type('d');
        cy.get('.gLFyf').should('be.visible');
        cy.get('.gLFyf').click();

    })

    it.skip("type bitfumes on the search input field and assert suggestion and click on second result", () => {
        cy.get("[name='q']").type("bitfumes");

        const searchDropdownList = ".erkvQe > .OBMEnb > ul";
        cy.get(searchDropdownList)
          .find("li")
          .eq(1)
         // .contains("bitfumo golden greek")
          //.click({force: true});
         
        //cy.contains('https://bitfumo.it>index.php/the-g');
    })

    it.only("type bitfumes on the search input field and press enter to perform search", () => {
       cy.visit("https://google.com");
        /*cy.get('.jw8mI').scrollTo('bottom');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type("bitfumes {enter}", {delay: 500});*/

        
    })
});