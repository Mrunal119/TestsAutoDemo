class computerList {
    visit() {
      cy.visit('/');
    }
  
    get searchComputerInputTxt() {
      return  cy.get('#searchbox');
    }

    get filterBtn(){
       return cy.get('#searchsubmit');
    }

    get addNewComputerBtn()
    {
        return cy.get('#add');
    }

    get colName()
    {
        return cy.get('.col-name');
    }

    get colIntroduced()
    {
        return cy.get('.col-introduced');
    }

    get colDiscontinued()
    {
        return cy.get('.col-discontinued');
    }

    get colCompany()
    {
        return cy.get('.col-company');
    }

    get nextPageBtn()
    {
        return cy.get('.next > a');
    }

    get prevPageBtn()
    {
        return cy.get('.prev > a')
    }

    get row1()
    {
        return cy.get('tbody > :nth-child(1) > :nth-child(1)');
    }

    get row2()
    {
        return cy.get('tbody > :nth-child(2) > :nth-child(1)');
    }

    get row3()
    {
        return cy.get('tbody > :nth-child(3) > :nth-child(1)');
    }

    get firstRowLink()
    {
        return cy.get('tbody > :nth-child(1) > :nth-child(1) > a');
    }
        
    

}

export default computerList;