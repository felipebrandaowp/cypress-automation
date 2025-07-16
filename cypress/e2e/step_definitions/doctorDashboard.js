import { Then } from '@badeball/cypress-cucumber-preprocessor';
import DoctorDashboardPage from '../../../support/pages/doctorDashboardPage';

const doctorDashboardPage= new DoctorDashboardPage();

Then('I should see the total of patients', () => {
  doctorDashboardPage.getTotalPatients()
    .should('be.visible');
});

Then('I should be on Doctor dashboard', () => {
  cy.url().should('include', '/doctor-dashboard');
});
