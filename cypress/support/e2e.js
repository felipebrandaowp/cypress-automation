import './commands';
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {

  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false;
  }
  return true;
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

afterEach(() => {
  if (Cypress.currentTest.state === 'failed') {
    cy.screenshot(`failed-${Cypress.currentTest.title}`);
  }
});

Cypress.Commands.add('setViewport', (device = 'desktop') => {
  const viewports = {
    mobile: [375, 667],
    tablet: [768, 1024],
    desktop: [1280, 720],
    fullhd: [1920, 1080]
  };
  
  const [width, height] = viewports[device] || viewports.desktop;
  cy.viewport(width, height);
});