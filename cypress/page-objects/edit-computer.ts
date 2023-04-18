class editComputer {
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

    get deleteComputerBtn()
    {
        return cy.get('[class="btn danger"]');
    }

    get saveComputer()
    {
        return cy.get('.primary');
    }

    get cancelEditBtn()
    {
        return cy.get('a.btn');
    }
}

export default editComputer;