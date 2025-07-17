import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DoctorDashboardPage from '../../support/pages/doctorDashboardPage';

const doctorDashboardPage= new DoctorDashboardPage();

Then('I should see the total of patients card', () => {
  doctorDashboardPage.getTotalPatientsCard()
    .should('be.visible');
});

When('I click on the total of patients card', () => {
  doctorDashboardPage.getTotalPatientsCard()
    .should('be.visible')
    .click();
});

Then('I should be on patients menu', () => {
  cy.contains('div', 'Patient Management (').should('be.visible');
});

Then('I should see the new lab results card', () => {
  doctorDashboardPage.getNewLabResultsCard()
    .should('be.visible');
});

When('I click on the new lab results card', () => {
  doctorDashboardPage.getNewLabResultsCard()
    .should('be.visible')
    .click();
});

Then('I should be on new lab results menu', () => {
  cy.contains('div', 'Patient LMN Requests').should('be.visible');
});

Then('I should see the appointments card', () => {
  doctorDashboardPage.getAppointmentsCard()
    .should('be.visible');
});

When('I click on the appointments card', () => {
  doctorDashboardPage.getAppointmentsCard()
    .should('be.visible')
    .click();
});

Then('I should be on appointments menu', () => {
  cy.get('[placeholder="Search Appointments"]').should('be.visible');
});

Then('I should be on Doctor dashboard', () => {
  cy.url().should('include', '/doctor-dashboard');
});
