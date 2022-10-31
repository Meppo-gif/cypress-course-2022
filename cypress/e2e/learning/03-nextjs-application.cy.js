/// <reference types ="cypress" />

describe("test feeds are available", () =>{
    it("visit feed page", ()=> {
        cy.intercept("post", "http://localhost:3000/api/posts", {
            s
        })
        cy.visit("http://localhost:3000/feed");
    });

    it("count the feed as 2", ()=> {
        cy.get(".PostList_root_Cj_24")
          .find(".PostList_root_6WEkA")
          .should("be.visible")
          .and("have.length", 2);
    });
});

