import { After } from '@badeball/cypress-cucumber-preprocessor';
import DashboardPage from '../../support/pages/dashboardPage';

const dashboardPage = new DashboardPage();

After({ tags: '@logout' }, () => {
  dashboardPage.logout();
  cy.url().should('include', '/login');
});