import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import myWalletPage from '../../support/pages/myWalletPage';

Given('I click on My Wallet in the sidebar menu', () => {
  cy.wait(3000);
  myWalletPage.clickMyWallet();
});

Then('I should be redirected to My Wallet', () => {
  myWalletPage.validateRedirectToWallet();
});

When('I click on Scan Receipt', () => {
  myWalletPage.clickScanReceipt();
});

Then('I should see the Receipt Scanner title', () => {
  myWalletPage.validateReceiptScannerTitle();
});

When('I upload {string} in the receipt scanner', (fileName) => {
  myWalletPage.uploadReceipt(fileName);
});

Then('I should see the uploaded file name {string}', (fileName) => {
  myWalletPage.validateUploadedFileName(fileName);
});

When('I click on the Process Receipt button', () => {
  myWalletPage.clickProcessReceiptButton();
});

Then('I wait for the receipt to finish processing', () => {
  myWalletPage.waitForReceiptProcessing();
});
