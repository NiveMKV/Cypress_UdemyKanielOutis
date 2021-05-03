/*
Explore GetTitle,Textbox, Checkbox, Logs, Implicit waits, Alias, Chaining assertions,
Date timestamp, Viewport
 */

describe('Test Basic commands',()=>{

    it('should load correct url',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html');
    })

    it('should load correct address',()=>{
        cy.url().should('include','login.html');
        cy.title().should('equal','Zero - Log in')
    })

    it('should fill username',()=>{
        cy.get('#user_login')
            .clear()
            .type('Some Invalid username',{delay:60});
    })

    it('should fill password',()=>{
        //Using Alias.
        cy.get('#user_password').as('password');
        cy.get('@password').clear();
        cy.get('@password').type('some invalid password');
    })

    it('should check checkbox',()=>{
        cy.get('#user_remember_me').as('keepSigned');
        cy.get('@keepSigned').click();
    })
      
    it('should submit login form',()=>{
        //Using element's contents to click the same.
        cy.contains('Sign in').click();
    })

    it('should verify error message',()=>{
        //Chaining of assertions.
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong')
    })

    it('should overwrite current timestamp',()=>{
        const timestamp = new Date(2020,3,21)
        cy.log(timestamp);
    })

    it('should change viewport',()=>{
        cy.viewport('iphone-xr');
        //Adding implicit wait time to see the difference.
        cy.wait(3000);

        cy.viewport(1080,720);
    })
})