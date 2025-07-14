class RequestsPage {

  clickMyRequests() {
    cy.contains('My Requests')
      .click();
  }

  validateRequestsPage() {
    cy.url()
      .should('include', '/requests');
    cy.get('.text-2xl')
      .should('contain', 'Letter of Medical Necessity (LMN) Requests');
  }

  clickFindEligibleItems() {
    cy.contains('Find Eligible Items')
      .click();
  }

}

export default new RequestsPage();