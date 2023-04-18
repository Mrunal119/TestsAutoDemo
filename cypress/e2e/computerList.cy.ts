import computerList from "../page-objects/computer-list-page";

describe('ComputerList', () => {
  
  
    const computerListData = new computerList();
    beforeEach(() => {
    
      cy.visit('/');
    
    
      })

      it("Verify computer list data", () => {
        computerListData.colName.invoke('text').should('eq','Computer name');
        computerListData.colIntroduced.invoke("text").should('eq','Introduced');
        computerListData.colDiscontinued.invoke('text').should('eq','Discontinued');
        computerListData.colCompany.invoke('text').should('eq','Company');
        cy.contains("Displaying 1 to 10");

      })


      it("Verify filter by computer name", () => {
    
        computerListData.searchComputerInputTxt.type("Test");
        computerListData.filterBtn.click();
        cy.contains("computers found");
      });

      it("Verify able to clear the filter seacrh input box",() => {

        computerListData.searchComputerInputTxt.type("Test");
        computerListData.searchComputerInputTxt.clear();
        cy.reload();
      })

      it("Verify clicking on 'Add a new computer' button navigates to 'Add a computer' screen",() => {

        computerListData.addNewComputerBtn.click();
        cy.url().should('include','https://computer-database.gatling.io/computers/new');

      })

      it("Verify able to navigate to next page from computer list page",() => {

        computerListData.nextPageBtn.click();
        cy.contains("Displaying 11 to 20");

      })

      it("Verify able to navigate to previous page from next page",() => {

        computerListData.prevPageBtn.click();
        cy.contains("Displaying 1 to 10");

      })

      it("Verify clicking on computer name's link naviagtes to 'Edit' page",()=>{
       
        computerListData.firstRowLink.click();
        cy.contains("Edit computer");
      })

    })