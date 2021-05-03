
describe("API Testing",()=>{

    Cypress.config("baseUrl","https://jsonplaceholder.typicode.com")
    it("Testing GET - read", ()=>{
        cy.request("GET","/users")
          .then((response) => {
            expect(response).to.have.property("status",200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(10)
          })
    })

    it("Testing POST -create",()=>{
        let newUser ={"name":"Niv", "age":12, "company":"abc"};
        cy.request("POST","/posts", newUser)
          .then((response) =>{
           expect(response).to.have.property("status",201);           
          })
    })

    it("Testing PUT -Update",()=>{
        cy.request("PUT","/posts/1",{"company":"xyz"}).
           then((response)=>{
            expect(response.body).to.have.property("company","xyz")
           })
    })

    it("Testing DELETE ",()=>{
      cy.request("DELETE","/posts/1")
         .then((response)=>{
          expect(response).to.have.property("status",200)
         })
  })
})