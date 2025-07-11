import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import myRequestsPage from '../../support/pages/myRequestsPage';


Given('I click on My Requests in the sidebar menu', () => {
  cy.wait(3000);
  myRequestsPage.clickMyRequests();
});

Then('I should be on My Requests page', () => {
  myRequestsPage.validateRequestsPage();
});

When('I click on Find Eligible Items', () => {
  myRequestsPage.clickFindEligibleItems();
});
