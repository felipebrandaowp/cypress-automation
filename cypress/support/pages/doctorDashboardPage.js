class DoctorDashboardPage {

  dashboardCards() {
    return cy.get('.grid gap-6 md:grid-cols-2 lg:grid-cols-3');
  }

  getTotalPatients() {
    return this.dashboardCards()
      .contains('Total Patients');
  }


  clickOnNewLabResults() {
    this.dashboardCards()
      .contains('New Lab Results')
      .click();
  }

  clickOnAppointments() {
    this.dashboardCards()
      .contains('Appointments')
      .click();
  }

  seeMoreRecentLMNRequests() {
    cy.contains('h3', 'Recent LMN Requests')
      .parents('div.rounded-lg') 
      .within(() => {
        cy.contains('button', 'See More').click();
      });
  }

  seeMoreUpcomingAppointments() {
    cy.contains('h3', 'Upcoming Appointments')
      .parents('div.rounded-lg')
      .within(() => {
        cy.contains('button', 'See More').click();
      });
  }

}

export default DoctorDashboardPage;