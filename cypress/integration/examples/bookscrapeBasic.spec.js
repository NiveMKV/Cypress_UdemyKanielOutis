/*
Visit a webapp, refresh browser, navigate to Poetry category, Count the no:of articles
in the category, select a book 'Olio' and Get it's price.
*/

describe('Test Book Actions',()=>{

    it('should load correct url',()=>{
        cy.visit('http://books.toscrape.com/index.html');
    })

    it('should load correct address',()=>{
        cy.url().should('include','index.html');
        cy.log('Before reload!...');
        cy.reload();
        cy.log('Website is loaded after Browser is refreshed.!...');
    })

    it('should verify 19articles in the poetry category',()=>{
        cy.get('a')
            .contains('Poetry')
            .click();

        //to get the count of the articles listed.use its attribute length
        cy.get('article')
            .should('have.class','product_pod')
            .its('length')
            .should('eq',19);
    })

    it('should click Olio book and get product description',()=>{
        cy.get('a[title="Olio"]')
            .click()
            .get('#product_description')
            .should('be.visible');
    })

    it('should verify the proce of olio book',()=>{
        cy.get('.product_main p')
            .contains('23.88');
    })
      
})