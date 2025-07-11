class  commonPages {

  clickMenuItemDashboard() {
    cy.contains('Dashboard')
      .click();
  }

  clickMenuItemPatients() {
    cy.contains('Patients')
      .click();
  }

  clickMenuItemLLMRequests() {
    cy.contains('LMN Requests')
      .click();
  }

  clickMenuItemAppointments() {
    cy.contains('Appointments')
      .click();
  }

}

export default new commonPages();