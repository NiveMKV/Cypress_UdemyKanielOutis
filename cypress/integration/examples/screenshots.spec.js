describe('Work with screenshots- Fullpage, single element',()=>{

    it('should screenshot full page',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.screenshot({ capture: "fullPage"}); //captures within the viewport of the screen.
    })
    
    it('should screenshot single element ',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.get('h1').screenshot(); //Header h1 'Example' element.

        cy.get('#populate').screenshot();//'Populate your name' button element.
    })
    
})