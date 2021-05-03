class Basepage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/');        
    }
    static wait(number){
        cy.wait(number);
    }
}

class HomePage extends Basepage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView();
    }
}

describe('Scrolling the page using static functions',()=>{

    before(function(){
        //runs before all test in a describe test suite.
        //Used to setup test data or test cocntent
        //seed or reset database.
        HomePage.loadHomePage();
    })

    beforeEach(function(){
        //runs before each it - test case.
    })

    it('abstraction should work with classes',()=>{
        HomePage.wait(4000);
        HomePage.scrollToBottom();
        HomePage.wait(3000);
        HomePage.scrollToTop();
    })

    afterEach(function(){
        //runs after each it- test case.
    })

    after(function(){
        //runs after all tests in a describe test suite.
        //used for cleaning database , clearing cache.
        cy.clearCookies();    
    })
})