class  PatientsPage {

  clickMyRequests() {
    cy.contains('LMN Requests')
      .click();
  }

  searchByEmail(email) {
    cy.get('[placeholder="Search by name or email..."]')
      .type(email);
  }

  searchByState(state) {
    cy.get('[placeholder="Search by state..."]')
      .type(state);
  }

  searchByFirstVisitDate(date) {
    cy.get('[placeholder="First visit date..."]')
      .type(date);
  }

  clearFilters() {
    cy.contains('Clear Filters')
      .click();
  }

  validatePatientsPage() {
    cy.get('.text-2xl font-semibold leading-none tracking-tight')
      .should('contain', 'Patient Management');
  }

  clickOnFirstPatient() {
    cy.get('div.h-full.w-full.rounded-[inherit] div.group')
      .first()
      .click();
  }

  clickOnPatientUploads() {
    cy.get('.hidden.sm\\:inline') 
      .contains('Patient Uploads')
      .click();
  }

  clickOnRequestFile() {
    cy.contains('Request File')
      .click();
  }

  fillRequestFileFromPatient() {
    cy.get('.flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1')
      .select('Medical Records');
    cy.get('#file-description')
      .type('Description Automation Test');
  }

  clickOnSendRequest() {
    cy.contains('Send Request')
      .click();
  }

}

export default new PatientsPage();