@Onboarding
Feature: Onboarding

  Background:
    Given I am on the login page
    When I enter a valid onboarding user email
    And I enter a valid onboarding user password
    And I click the login button

  @Wellcome @Subscription @BankConnection @Profille
  Scenario: New user is redirected to the onboarding flow and completes all steps
       
    
    Given I should be redirected to the onboarding page
    When I navigate to slide 1
    Then I should see the onboarding title and subtitle
    When I navigate to slide 2
    Then I should see the onboarding title and subtitle
    When I navigate to slide 3
    Then I should see the onboarding title and subtitle
    When I navigate to slide 4
    Then I should see the onboarding title and subtitle
    When I navigate to slide 5
    Then I should see the onboarding title and subtitle
    And I click the Get Started button
      
    Then I should be redirected to the Subscription page
    And I should see the Premium annual plan card with its features
    And I should see the Basic annual plan card with its features
    When I switch to the monthly plans page
    Then I should see the Premium monthly plan card with its features
    And I should see the Basic monthly plan card with its features
    When I return to the annual plans page
    And I chose the Premium annual plan
    Then I fill in the card details and confirm
    And I confirm that the annual plan was successfully confirmed
    And I verify the Premium annual plan details
    And I check the next steps card to unlock benefits
    Then I click the Continue button
      
    Then I should be redirected to the Bank Connection page
    And I should see the General Accounts section with all options and descriptions
    When I click the Connect button for Bank & HSA FSA Accounts
    Then I should see the Plaid connect account popup
    Then I should see the Plaid connect account popup
    And I click on the Continue as guest button
    Then I should see the institution selection screen
    Then I select the first institution from the list
    Then I should see the Chase login instructions screen
    When I click on the Continue to Login button
    Then I should be redirected to the final login page
