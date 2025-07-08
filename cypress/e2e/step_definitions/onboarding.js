import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OnboardingPage from '../../support/pages/onboardingPage';

const onboardingPage = new OnboardingPage();

const onboardingTitles = [
  'Turn Everyday Purchases Into Medical Savings',
  'Made a Health Purchase? Let\'s Get It Covered',
  'Get Labs Without the Guesswork',
  'Doctor-Backed, HIPAA-Locked',
  'We\'ll Handle the Paperwork, You Keep the Perks'
];

const onboardingSubtitles = [
  'Shop like usual. We\'ll spot the eligible medical expenses and get you money back—automatically.',
  'Upload your receipt and our LMN Confidence Score Calculator will tell you if it\'s qualified—fast.',
  'Easily order bloodwork or upload results. Our doctors review and advise—all from your dashboard.',
  'Connect to licensed physicians, receive official LMNs, and store all your medical letters securely.',
  'WellnessPay takes care of eligibility, LMNs, tax reporting, and more—so you can save up to 35% annually.'
];

let currentSlide = 1;

Given('I should be redirected to the onboarding page', () => {
  onboardingPage.verifyOnboardingRedirect();
});

When('I navigate to slide {int}', (slideNumber) => {
  currentSlide = slideNumber;
  onboardingPage.clickSlideIndicator(slideNumber);
});

Then('I should see the onboarding title and subtitle', () => {
  onboardingPage.validateTitleAndSubtitle(
    onboardingTitles[currentSlide - 1],
    onboardingSubtitles[currentSlide - 1]
  );
});

Then('I click the Get Started button', () => {
  onboardingPage.clickGetStartedButton();
});

Then('I should be redirected to the Subscription page', () => {
  onboardingPage.verifySubscriptionRedirect();
});


Then('I should see the Premium annual plan card with its features', () => {
  onboardingPage.validatePremiumAnnualCardFeatures();
});

Then('I should see the Basic annual plan card with its features', () => {
  onboardingPage.validateBasicAnnualCardFeatures();
});

When('I switch to the monthly plans page', () => {
  onboardingPage.clickMonthlyButton();
});

Then('I should see the Premium monthly plan card with its features', () => {
  onboardingPage.validatePremiumMonthlyCardFeatures();
});

Then('I should see the Basic monthly plan card with its features', () => {
  onboardingPage.validateBasicMonthlyCardFeatures();
});

When('I return to the annual plans page', () => {
  onboardingPage.clickAnnualButton();
});

When('I chose the Premium annual plan', () => {
  onboardingPage.clickChoosePlanInPremiumCard();
});


Then('I fill in the card details and confirm', () => {
  // Implement: validate Premium annual plan is selected
});

Then('I confirm that the annual plan was successfully confirmed', () => {
  onboardingPage.validateSubscriptionConfirmation();
});

Then('I verify the Premium annual plan details', () => {
  onboardingPage.validatePremiumAnnualPlanDetails();
});

Then('I check the next steps card to unlock benefits', () => {
  onboardingPage.validateStepsHeader();
  onboardingPage.validateStepsDetails();
});

Then('I click the Continue button', () => {
  onboardingPage.clickContinueButton();
});

Then('I should be redirected to the Bank Connection page', () => {
  onboardingPage.verifyBankConnectionRedirect();
});

Then('I should see the General Accounts section with all options and descriptions', () => {
  onboardingPage.verifyGeneralAccountsSection();
});

When('I click the Connect button for Bank & HSA FSA Accounts', () => {
  onboardingPage.clickConnectBankAccountsButton();
  cy.wait(3000);
});

Then('I should see the Plaid connect account popup', () => {
  onboardingPage.validateAllPlaidPopupElements();
});

Then('I should content is displayed correctly', () => {
  onboardingPage.validateAllPopupContent();
});

When('I click on the Continue as guest button', () => {
  onboardingPage.clickContinueAsGuest();
});

Then('I should see the institution selection screen', () => {
  onboardingPage.validateInstitutionSelectionScreen();
});

Then('I select the first institution from the list', () => {
  onboardingPage.clickFirstInstitution();
});

Then('I should see the Chase login instructions screen', () => {
  onboardingPage.validateChaseLoginScreenContent();
});

When('I click on the Continue to Login button', () => {
  onboardingPage.clickContinueToLogin();
});

Then('I should be redirected to the final login page', () => {
  onboardingPage.waitForNewWindowAndNavigate();
});

