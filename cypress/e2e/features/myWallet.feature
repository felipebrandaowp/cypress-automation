Feature: My Wallet

  Background: 
    Given I am on the login page
    When I enter a valid email
    And I enter a valid password
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see the welcome message
  
  Scenario: Receipt Scanner
    Given I click on My Wallet in the sidebar menu
    Then I should be redirected to My Wallet
    When I click on Scan Receipt
    Then I should see the Receipt Scanner title
    When I upload "receipt.pdf" in the receipt scanner
    Then I should see the uploaded file name "receipt.pdf"
    When I click on the Process Receipt button
    Then I wait for the receipt to finish processing
    Then I should see the Receipt Scanner title
    Then I click on the specific button with long class
    When I fill the Price field with 50
    Then I should see the value as $50.00
    When I click on Save Receipt