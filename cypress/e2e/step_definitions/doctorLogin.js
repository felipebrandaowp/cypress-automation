import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/loginPage';

const loginPage = new LoginPage();

When('I enter a valid doctor email', () => {
  loginPage.fillEmail(Cypress.env('validDoctorEmail'));
});

When('I enter a valid doctor password', () => {
  loginPage.fillPassword(Cypress.env('validDoctorPassword'));
});

Then('I should be redirected to the Doctor dashboard', () => {
  cy.url().should('include', '/doctor-dashboard');
});

Then('I should see the welcome message', () => {
  cy.get('.text-xl.font-semibold.text-gray-900')
    .should('be.visible')
    .and('contain.text', 'Dr. Portal - ');
});


