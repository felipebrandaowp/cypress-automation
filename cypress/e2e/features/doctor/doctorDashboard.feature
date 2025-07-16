Feature: Doctor Dashboard

  Background: 
    Given I am on the login page
    When I enter a valid doctor email
    And I enter a valid password
    And I click the login button
    Then I should be on Doctor dashboard

 @logout
  Scenario: Validate Dashboard Elements
    Then I should see the total of patients
    