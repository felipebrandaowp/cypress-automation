class AppointmentsPage {

  clickAppointments() {
    cy.contains('Appointments')
      .click();
  }

  validateAppointmentsPage() {
    cy.url()
      .should('include', '/appointments');
    cy.get('.text-2xl.font-semibold.leading-none.tracking-tight.flex.items-center.gap-2')
      .should('contain', 'Appointments');
  }

  clickScheduleAppointment() {
    cy.get('.justify-between > .inline-flex')
      .contains('Schedule Appointment')
      .click();
  }

  validateChooseYourDoctorPage() {
    // cy.get('.text-2xl.font-bold.text-gray-900.mb-2')
    //   .should('contain', 'Choose Your Doctor');
    // cy.get('.text-gray-600')
    //   .should('contain', 'Select a healthcare provider for your telehealth consultation');
  }

  validateAutomationDoctor() {
    cy.get('.font-semibold.text-gray-900')
      .should('contain', 'Automation Doctor');
  }

  clickAutomationDoctor() {
    cy.get('.font-semibold.text-gray-900')
      .contains('Automation Doctor')
      .click();
  }

  clickFirstAvailableDate() {
    cy.get('button[data-testid="day"][data-disabled="false"]')
      .first()
      .click();
  }

  clickFirstAvailableTime() {
    cy.get('button[data-testid="time"][data-disabled="false"]')
      .first()
      .click();
  }

  typeAdditionalNotes(notes) {
    cy.get('#notes').type(notes);
  }

  clickConfirmBookButton() {
    cy.get('[data-testid="confirm-book-button"]')
      .click();
  }

  validateBookingConfirmation() {
    cy.get('.text-sm.font-semibold')
      .should('contain', 'Booking Confirmed!');

    cy.get('.text-sm.opacity-90')
      .should('contain', 'Your appointment has been successfully scheduled.');
  }

}

export default new AppointmentsPage();