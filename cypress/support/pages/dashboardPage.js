class DashboardPage {
  logout() {
    cy.contains('Sign Out').click();
  }
}

export default DashboardPage;