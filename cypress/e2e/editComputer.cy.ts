import editComputer from "../page-objects/edit-computer";


describe('Edit Computer', () => {
  
  
    const editComputerData = new editComputer();
    
    beforeEach(() => {
    
      cy.visit('/381');
    
      })

      it("Verify able to edit computer data", () => {
        editComputerData.computernameTxtInput.type("Update")
        editComputerData.introducedDateInput.type("2023-02-03");
        editComputerData.saveComputer.click();
        cy.contains("updated")

      })

      it("Verify delete computer",()=>{

        cy.visit('/456');
        editComputerData.deleteComputerBtn.click({force:true});
        cy.contains("deleted");
        cy.url().should('eq', Cypress.config().baseUrl);
      })

    })
