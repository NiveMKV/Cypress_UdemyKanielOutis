describe('Write/Read data to JSON/ text files',()=>{

    it('should write data to JSON file',()=>{
        //Everytime the test is run this file is regenerated with fresh data.
        cy.writeFile('log.json',{name:"Mike",age:25});
    })
    
    it('should write data to text file',()=>{
        cy.writeFile('log.txt','Hello World !!!...');
    })
    
    it('should read data from JSON file',()=>{
        //Everytime the test is run this file is regenerated with fresh data.
        cy.readFile('log.json')
            .its('age')
            .should('equal',25);
    })
    
    it('should read data from text file',()=>{
        cy.readFile('log.txt')
            .should('contain','Hello World ');
    })

    it('should assert document contents',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.wait(2000)
        cy.document()
            .its('contentType')
            .should('equal','text/html');

        cy.document()
            .should('have.property','charset')
            .and('equal','UTF-8')
    })
})