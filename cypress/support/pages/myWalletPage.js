class WalletPage {

  clickMyWallet() {
    cy.contains('My Wallet')
      .click();
  }

  validateRedirectToWallet() {
    cy.url()
      .should('include', '/wallet');
    cy.get('.text-xl')
      .should('contain', 'My Wallet');
  }

  clickScanReceipt() {
    cy.contains('Scan Receipt')
      .click();
  }

  validateReceiptScannerTitle() {
    cy.contains('Receipt Scanner')
      .should('contain', 'Receipt Scanner');
  }

  uploadReceipt(fileName) {
    cy.get('input[type="file"]')
      .selectFile(`cypress/support/files/${fileName}`, { force: true });
  }

  validateUploadedFileName(fileName) {
    cy.contains(fileName)
      .should('be.visible');
  }

  clickProcessReceiptButton() {
    cy.contains('button', 'Process Receipt')
      .click();
  }

  waitForReceiptProcessing() {
    cy.contains('Processing...')
      .should('not.exist', {timeout: 10000});
  }

  validateReceiptScannerTitle() {
    cy.get('.text-lg.font-semibold.leading-none.tracking-tight.flex.items-center.gap-2')
      .should('contain', 'Receipt Scanner');
  }

  clickButtonWithLongClass() {
    cy.get('.p-3 > .justify-between > .flex.gap-2 > .justify-center')
      .click();
  }

  fillPriceFieldWith50() {
    cy.get('input[placeholder="Price"]')
      .clear()
      .type('5');
  }

  validatePriceIs50Dollars() {
    cy.get('.bg-blue-50')
      .should('contain', '$50.00');
  }

  clickSaveReceipt() {
    cy.get('.justify-end > .bg-primary')
      .click();
  }


}

export default new WalletPage();