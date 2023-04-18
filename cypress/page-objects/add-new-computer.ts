class addNewComputer {
    visit() {
      cy.visit('/new');
    }
  
    get computernameTxtInput() {
      return  cy.get('#name');
    }

    get introducedDateInput(){
       return cy.get('#introduced');
    }

    get discontinuedDateInput(){
      return cy.get('#discontinued');
    }

    get companyListDropdown(){
      return cy.get("#company");
    }

    get createComputerBtn(){
      return  cy.get('[class= "btn primary"]');
    }

    get cancelBtn(){
      return cy.get('[class= btn]');
    }

    
  }

  //const addNewPc = new addNewComputer();

  export default addNewComputer;