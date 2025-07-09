Feature: Appointments

  Background: 
    Given I am on the login page
    When I enter a valid email
    And I enter a valid password
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see the welcome message

  Scenario: Schedule a new appointment
    Given I click on Appointments in the sidebar menu
    Then I should be on the Appointments page
    When I click on Schedule Appointment 
    Then I should see the Choose Your Doctor page
    And I should see the Automation Doctor
    When I click on Automation Doctor
    Then I select the first available date
    And I select the first available time slot
    When I enter "Test Additional Notes" in the additional notes field
    Then I click on the confirm book button
    Then I should see the booking confirmation message