class DoctorDashboardPage {

  dashboardCards() {
    return cy.get('.grid gap-6 md:grid-cols-2 lg:grid-cols-3');
  }

  getTotalPatientsCard() {
    return cy.xpath('//*[@id="root"]/div[2]/div/main/div/div[1]/div[1]');
  }


  getNewLabResultsCard() {
    return cy.xpath('//*[@id="root"]/div[2]/div/main/div/div[1]/div[2]');
  }

  getAppointmentsCard() {
    return cy.xpath('//*[@id="root"]/div[2]/div/main/div/div[1]/div[3]');
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