import { should } from "chai";
import cypress = require("cypress");

import addNewComputer from "../page-objects/add-new-computer";



describe('Add New Computer', () => {
  
    let data;
    const addNewPc = new addNewComputer();
    before(() => {
      cy.fixture('company').then((fData) => {
         data = fData;
         
      });
      });

    beforeEach(() => {
   
      cy.navigateAddComputerPage();
    
      })
   
    it("Verify able to add a new computer", () => {
    
    addNewPc.computernameTxtInput.type("TstCmp");
    addNewPc.introducedDateInput.type("2023-01-01");
    addNewPc.discontinuedDateInput.type("2023-02-03");
    addNewPc.companyListDropdown.select(data.company);
    addNewPc.createComputerBtn.click();
    cy.contains("Done")

    });

    it("Verify cancel action to 'Add a Computer'", () => {
    addNewPc.cancelBtn.click();
    cy.url().should('eq', Cypress.config().baseUrl)

     }) 

   it("Verify computer name is a required field to add a new computer",() => {
      addNewPc.createComputerBtn.click();
      cy.contains("Failed");   //Validate error message

   })

   it("Verify able to add a new computer with only required field", () => {
      addNewPc.computernameTxtInput.type("TestComp")
      addNewPc.createComputerBtn.click();

   })

   it("Verify the valid date for 'Introduced' field",() =>{
       addNewPc.computernameTxtInput.type("TestApple")
       addNewPc.introducedDateInput.type("01-01-2023")
       addNewPc.createComputerBtn.click();
       cy.contains(" Failed ");   //Validate error message
   
   })

   it("Verify valid date for 'Discontinued' field", ()=>{

       addNewPc.computernameTxtInput.type("TestApple")
       addNewPc.discontinuedDateInput.type("01-01-2023")
       addNewPc.createComputerBtn.click();
       cy.contains(" Failed ");   //Validate error message

   })

   it("Verify able to clear the input fields", () =>{

    addNewPc.computernameTxtInput.type("TstCmp");
    addNewPc.introducedDateInput.type("2023-01-01");
    addNewPc.discontinuedDateInput.type("2023-02-03");
    
    addNewPc.computernameTxtInput.clear();
    addNewPc.introducedDateInput.clear();
    addNewPc.discontinuedDateInput.clear();
   
   })

})

