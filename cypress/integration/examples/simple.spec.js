/*
Verify correct webaddress is loaded, Work with dropdown box with 'Select'tags,
Usage of Cypress.$ function.
*/

describe('Test Browser Actions',()=>{

    it('should load correct url',()=>{
        cy.visit('http://example.com/', {timeout:10000});
    })
    it('should load correct address',()=>{
        cy.url().should('include','example.com');
    })

    it('should load correct element in the webpage',()=>{
        cy.get('h1').contains('Example Domain');
    })

    it('work with dropdwon/select box',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.get('#preferred-interface').select('JavaScript API');
        cy.get('#preferred-interface').should('have.value','JavaScript API');
    })    

    it('Cypress $ function',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html');
        const signInButton = Cypress.$('#signin_button');//Pass selector 
        signInButton.click();
    })
})