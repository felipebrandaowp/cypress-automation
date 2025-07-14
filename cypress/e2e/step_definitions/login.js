import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/loginPage';

const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter a valid email', () => {
  loginPage.fillEmail(Cypress.env('validEmail'));
});

When('I enter a valid onboarding user email', () => {
  loginPage.fillEmail(Cypress.env('onboardingEmail'));
});

When('I enter a valid onboarding user password', () => {
  loginPage.fillPassword(Cypress.env('onboardingPassword'));
});

When('I enter a valid password', () => {
  loginPage.fillPassword(Cypress.env('validPassword'));
});

When('I enter an invalid email', () => {
  loginPage.fillEmail(Cypress.env('invalidEmail'));
});

When('I enter an invalid password', () => {
  loginPage.fillPassword(Cypress.env('invalidPassword'));
});

When('I click the login button', () => {
  loginPage.clickLoginButton();
  cy.wait(2000);
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see the welcome message', () => {
  cy.get('.text-lg > .font-semibold')
    .should('be.visible')
    .and('contain.text', 'Welcome Back,');
});

Then('I should see the login error message', () => {
  loginPage.verifyErrorMessage();
});
