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
      .should('not.exist');
  }

}

export default new WalletPage();