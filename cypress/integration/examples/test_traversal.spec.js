/*
Traversing between elements in cypress
*/
///<reference types="cypress" />

describe('Traversing through the DOM elements',()=>{
    
    before(function(){
        cy.visit("https://example.cypress.io/commands/traversal#");
    })

    it('children command',()=>{

        cy.get('.traversal-breadcrumb')
            .children('li')
            .eq(1).should('contain','Library')
            .click();
        
            cy.get('.traversal-breadcrumb')
            .children('li')
            .eq(1).should('have.css','text-decoration-style','solid');
    })

    it('closet command',()=>{

        cy.get('.traversal-badge').as('friendsCount')
        cy.get('@friendsCount').
            closest('div').
            should('have.class', 'well')
    })

    it('filter command',()=>{

        cy.get('.well>ul>li>a')
            .filter('[href="#"]').should('contain', 'Services')
    })

    it('find command',()=>{

        cy.get('.traversal-pagination').find('li').eq(1).
            find('a').
            should('contain', 1)
    })

    it('first command',()=>{

        cy.get('.traversal-table').find('tr').eq(2)
            .first().should('contain', '2')
    })

    it('next command',()=>{

        cy.get('.traversal-ul')
            .contains('oranges').next().should('contain', 'bananas')   
    })

    it('nextAll command',()=>{

        cy.get('.traversal-next-all .second')            
            .nextAll('li').should('have.length', 3)
    })

    it('nextAll command',()=>{

        cy.get('.traversal-next-all .second')            
            .nextAll('li').should('have.length', 3)
    })

    it('nextUntil command',()=>{

        cy.get('#veggies')
            .nextUntil('#nuts').should('contain', 'corn')
    })
})