class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('#email')
      .clear()
      .type(email);
  }

  fillPassword(password) {
    cy.get('#password')
      .clear()
      .type(password);
  }

  clickLoginButton() {
    cy.get('button[type="submit"]')
      .click();
  }

  verifyErrorMessage() {
    cy.get('.text-sm.opacity-90')
      .should('be.visible')
      .and('contain.text', 'Invalid email or password. Please check your credentials and try again.');
  }
  
}

export default LoginPage;
