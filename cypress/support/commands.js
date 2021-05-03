// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(userName, passWord) =>{
    if(userName == '' || passWord == ''){
        //If the argument username is null, Get it from fixtures(user.json)
        cy.fixture('user.json').then((user) => {
            cy.log(12345);
            cy.get('#user_login').clear().type(user.username);   
            cy.get('#user_password').clear().type(user.password);
            cy.get('#user_remember_me').click();
            cy.contains('Sign in').click();
        })
    }
})
