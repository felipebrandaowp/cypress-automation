Feature: Login

  Background:
    Given I am on the login page

  @logout
  Scenario: Login with valid credentials
    When I enter a valid email
    And I enter a valid password
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see the welcome message

  Scenario: Login with invalid email
    When I enter an invalid email
    And I enter a valid password
    And I click the login button
    Then I should see the login error message

  Scenario: Login with invalid password
    When I enter a valid email
    And I enter an invalid password
    And I click the login button
    Then I should see the login error message
