/*
Scroll down the page and wait for some time to see actually whats happeninf when 
the test is being run and scroll up again and wait for some time.
*/

describe('Scroll down the page and scroll up again',()=>{
    it('should scroll up and down',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.wait(4000);
        cy.get('#submit-button').scrollIntoView();
        cy.wait(4000);
        cy.get('header').scrollIntoView();
    })    
})