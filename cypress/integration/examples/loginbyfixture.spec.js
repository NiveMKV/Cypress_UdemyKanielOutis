/*
Using cy.login custom command where data for login is fetched from fixtures.
And the title page after login is verified.
*/

describe('Login by using custom commands and fixtures',()=>{
    it('should login successfully',()=>{
        
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.login('', '');
        cy.title().should('include','Zero - Account Summary');

    })    
})