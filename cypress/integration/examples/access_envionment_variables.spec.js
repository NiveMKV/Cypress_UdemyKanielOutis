///<reference types="cypress" />

//const cypress = require("cypress");

describe('Accessing environment variables',()=>{
    
    it('should access from .env local file',()=>{
        
        expect(Cypress.env("company")).to.be.equal("xyz");
        expect(Cypress.env()).to.contain({
                                company:"xyz",
                                id:123
                                });        
    })


})