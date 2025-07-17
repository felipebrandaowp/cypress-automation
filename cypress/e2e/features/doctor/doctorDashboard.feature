Feature: Doctor Dashboard

  Background: 
    Given I am on the login page
    When I enter a valid doctor email
    And I enter a valid password
    And I click the login button
    Then I should be on Doctor dashboard

  Scenario: Validate Dashboard Elements
    Then I should see the total of patients card
    And I should see the new lab results card
    And I should see the appointments card

  @logout
  Scenario: Validate redirection to patient tab
    Given I should see the total of patients card
    When I click on the total of patients card
    Then I should be on patients menu

  @logout
  Scenario: Validate redirection to new lab results tab
    Given I should see the new lab results card
    When I click on the new lab results card
    Then I should be on new lab results menu

  @logout
  Scenario: Validate redirection to appointments tab
    Given I should see the appointments card
    When I click on the appointments card
    Then I should be on appointments menu