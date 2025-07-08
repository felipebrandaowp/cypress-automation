class OnboardingPage {

  verifyOnboardingRedirect() {
    cy.get('.text-lg.font-semibold.text-gray-900.mb-2')
      .should('be.visible')
      .and('contain.text', 'Setup Progress');
  }

  clickSlideIndicator(slideNumber) {
    cy.get(`[aria-label="Go to slide ${slideNumber}"]`).click();
  }

  validateTitleAndSubtitle(expectedTitle, expectedSubtitle) {
    cy.get('.text-3xl.font-bold.text-gray-900.leading-tight.font-manrope.transition-opacity.duration-300.ease-in-out.opacity-100')
      .should('be.visible')
      .and('contain.text', expectedTitle);

    cy.get('.text-lg.text-gray-600.max-w-2xl.mx-auto.font-manrope.transition-opacity.duration-300.ease-in-out.opacity-100')
      .should('be.visible')
      .and('contain.text', expectedSubtitle);
  }

  clickGetStartedButton() {
    cy.contains('button', 'Get Started')
      .click();
  }

  verifySubscriptionRedirect() {
    cy.get('.text-2xl.font-bold.text-gray-900.mb-2.font-manrope')
      .should('contain.text', 'Choose Your Plan');
    cy.get('.text-gray-600.font-manrope')
      .should('contain.text', 'Select a subscription plan to unlock WellnessPay features');
  }

  premiumCard() {
    return cy.get('.rounded-lg.border.bg-card.text-card-foreground.relative.flex.flex-col.h-full.border-primary.shadow-lg');
  }

  validatePremiumAnnualCardFeatures() {
    this.premiumCard()
      .should('contain.text', 'Premium')
      .and('contain.text', '$1,000.00')
      .and('contain.text', '(Annual)')
      .and('contain.text', 'Save $200.00')
      .and('contain.text', 'per year')
      .and('contain.text', '120 LMN credits')
      .and('contain.text', '5 bank connections')
      .and('contain.text', 'All Premium features')
      .and('contain.text', 'Doctor onboarding call included')
      .and('contain.text', '120 LMN consultations per year')
      .and('contain.text', '60 Teledoc visits per year')
      .and('contain.text', 'Annual bloodwork panel included')
      .and('contain.text', 'Annual savings included');
  }

  validatePremiumMonthlyCardFeatures() {
    this.premiumCard()
      .should('contain.text', 'Premium')
      .and('contain.text', '$100.00')
      .and('contain.text', 'per month')
      .and('contain.text', '10 LMN credits')
      .and('contain.text', '5 bank connections')
      .and('contain.text', 'Everything in Basic')
      .and('contain.text', 'Doctor onboarding call included')
      .and('contain.text', '10 LMN consultations per month')
      .and('contain.text', '5 Teledoc visits per month')
      .and('contain.text', 'Free generic prescriptions (800+ medications)')
      .and('contain.text', 'Annual bloodwork panel included')
      .and('contain.text', 'Unlimited credit roll over')
      .and('contain.text', 'Wellness discounts available')
      .and('contain.text', 'Priority email support');
  }

  basicCard() {
    return cy.get('.rounded-lg.border.bg-card.text-card-foreground.shadow-sm.relative.flex.flex-col.h-full');
  }

  validateBasicAnnualCardFeatures() {
    this.basicCard()
      .should('contain.text', 'Basic')
      .and('contain.text', '$500.00')
      .and('contain.text', '(Annual)')
      .and('contain.text', 'Save $100.00')
      .and('contain.text', 'per year')
      .and('contain.text', '60 LMN credits')
      .and('contain.text', '5 bank connections')
      .and('contain.text', 'All Basic features')
      .and('contain.text', 'Doctor onboarding call included')
      .and('contain.text', '60 LMN consultations per year')
      .and('contain.text', 'Annual savings included')
      .and('contain.text', 'Wellness Pay debit card included');
  }

  validateBasicMonthlyCardFeatures() {
    this.basicCard()
      .should('contain.text', 'Basic')
      .and('contain.text', '$50.00')
      .and('contain.text', 'per month')
      .and('contain.text', '5 LMN credits')
      .and('contain.text', '5 bank connections')
      .and('contain.text', 'Doctor onboarding call included')
      .and('contain.text', 'Link up to 5 bank/credit accounts')
      .and('contain.text', '5 LMN consultations per month')
      .and('contain.text', 'Unlimited expense tracking')
      .and('contain.text', 'HSA/FSA reimbursement reports')
      .and('contain.text', 'Wellness Pay debit card included')
      .and('contain.text', 'Use it or lose it credits')
      .and('contain.text', 'Wellness discounts available')
      .and('contain.text', 'Email support');
  }

  clickMonthlyButton() {
    cy.contains('button', 'Monthly')
      .click()
      .should('have.attr', 'data-state', 'active')
      .and('have.attr', 'aria-selected', 'true');
  }

  clickAnnualButton() {
    cy.contains('button', 'Annual (Save 10%)')
      .click()
      .should('have.attr', 'data-state', 'active')
      .and('have.attr', 'aria-selected', 'true');
  }

  clickChoosePlanInPremiumCard() {
    this.premiumCard().contains('button', 'Choose Plan').click();
  }

  validateSubscriptionConfirmation() {
    cy.get('.text-2xl.font-bold.text-gray-900.mb-2.font-dm-sans')
      .should('contain.text', 'Thanks for subscribing! You are now on the Premium plan');

    cy.get('.text-lg.text-gray-600.font-dm-sans')
      .should('contain.text', 'Enjoy all the perks of a Premium WellnessPay member');
  }

  validateStepsHeader() {
    cy.get('.text-2xl.font-semibold.leading-none.tracking-tight.text-blue-900.font-dm-sans.text-center')
      .should('contain.text', 'You\'re 3 quick steps away from unlocking your wellness benefits');
  }

  validateStepsDetails() {
    const steps = [
      'Set Up Your Profile',
      'Let\'s get to know you.',
      'Connect Accounts (optional)',
      'Link your card, Amazon, or email receipts to track eligible purchases automatically.',
      'Book Your Doctor Consult',
      'Required to unlock tax-free benefits — it\'s fast and fully online.',
      'You\'ll unlock LMNs, free labs, and wellness perks once you complete these steps.'
    ];

    cy.get('.rounded-lg.border.text-card-foreground.shadow-sm.w-full.lg\\:w-auto.lg\\:min-w-\\[350px\\].lg\\:max-w-\\[450px\\].border-blue-200.bg-blue-50')
      .should('be.visible')
      .within(() => {
        steps.forEach((stepText) => {
          cy.contains(stepText).should('be.visible');
        });
      });
  }

  getPremiumAnnualPlanCard() {
    return cy.get('.rounded-lg.border.bg-card.text-card-foreground.shadow-sm.w-full.lg\\:w-auto.lg\\:min-w-\\[350px\\].lg\\:max-w-\\[400px\\]').eq(1);
  }

  validatePremiumAnnualPlanDetails() {
    this.getPremiumAnnualPlanCard()
      .should('contain.text', 'Premium')
      .and('contain.text', '$100.00') 
      .and('contain.text', 'per month') 
      .and('contain.text', 'Everything in Basic')
      .and('contain.text', 'Doctor onboarding call included')
      .and('contain.text', '10 LMN consultations per month')
      .and('contain.text', '5 Teledoc visits per month')
      .and('contain.text', 'Free generic prescriptions (800+ medications)')
      .and('contain.text', 'Annual bloodwork panel included')
      .and('contain.text', 'Unlimited credit roll over')
      .and('contain.text', 'Wellness discounts available')
      .and('contain.text', 'Priority email support');
  }

  clickContinueButton() {
    cy.contains('button', 'Continue')
      .click();
  }

  verifyBankConnectionRedirect() {
    cy.get('.text-2xl')
      .should('contain.text', 'Connect Your Accounts');
    cy.get('.text-gray-600')
      .should('contain.text', 'Securely link your financial accounts and favorite stores to automatically track health-related purchases');
  }

  verifyGeneralAccountsSection() {
    cy.get('.space-y-3')
      .should('contain.text', 'Bank & HSA/FSA Accounts')
      .and('contain.text', 'Checking, Savings, Health savings and Flexible Spending')
      .and('contain.text', 'Credit Cards')
      .and('contain.text', 'Track eligible medical expenses')
      .and('contain.text', 'Link Your Favorite Stores')
      .and('contain.text', 'Sync your shopping activity to find eligible reimbursements')
      .and('contain.text', 'Connect');

    cy.get('.text-center.text-sm.text-gray-500.max-w-lg.mx-auto')
      .should('contain.text', '🔒 Your information is protected with bank-level security. We use read-only access and never store your login credentials.');
  }

  clickConnectBankAccountsButton() {
    cy.get('.space-y-3 > :nth-child(1) > .flex.gap-2 > .inline-flex')
      .click();
  }

  validateHeader() {
    cy.get('#plaid-link-iframe-1')
      .should('be.visible')
      .and('have.attr', 'src');

    cy.get('#plaid-link-iframe-1')
      .should('have.attr', 'src')
      .and('contain', 'plaid.com');
  }

  validateInstructionalText() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('div')
          .contains('Use your phone number to log in or sign up with Plaid')
          .should('be.visible');
      });
  }

  validatePhoneNumberInput() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[placeholder="Phone"]')
          .should('be.visible');
      });
  }

  validateTermsText() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('p')
          .contains('Terms apply. By continuing, you agree')
          .should('be.visible');
      });
  }

  validateContinueButtonIsDisabled() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('#aut-button')
          .should('be.visible')
          .and('contain.text', 'Continue')
          .and('be.disabled');
      });
  }

  validateContinueAsGuestButton() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('#aut-secondary-button')
          .should('be.visible')
          .and('contain.text', 'Continue as guest');
      });
  }

  validateAllPlaidPopupElements() {
    this.validateHeader();
  
    this.validateInstructionalText();
    this.validatePhoneNumberInput();
    this.validateTermsText();
    this.validateContinueButtonIsDisabled();
    this.validateContinueAsGuestButton();
  }

  clickContinueAsGuest() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('#aut-secondary-button')
          .click();
      });
  }

  validateInstitutionSelectionScreen() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.Title-module__refresh.alignmentHelperStyles-module__textAlignLeft.mb-2.ml-3.mt-3.mr-3.PaneSelectorPanes-module__paneEntrance')
          .should('be.visible')
          .and('contain.text', 'Select your institution');
      });
  }

  clickFirstInstitution() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.CondensedSearchTile-module__searchImage.CondensedSearchTile-module__condensedSearchImage')
          .first()
          .should('be.visible')
          .click();
      });
  }

  validateChaseLoginScreenContent() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.threads.Pane-module__container.refresh-styles.MuiBox-root.css-1xdhyk6')
          .within(() => {
            cy.contains('h1', 'Log in at Chase').should('be.visible');
            cy.contains('After logging into Chase, make sure you check all these boxes:')
              .should('be.visible');
            cy.contains('You\'ll share contact info, account and balance info, and transactions')
              .should('be.visible');
          });
      });
  }


  clickContinueToLogin() {
    cy.get('#plaid-link-iframe-1')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .contains('button', 'Continue to login')
          .should('be.visible')
          .and('be.enabled')
          .then(($button) => {
            const href = $button.attr('href') || 
                       $button.find('a').attr('href') ||
                       $button.data('url') ||
                       $button.data('href');
          
            if (href) {
              cy.wrap(href).as('loginUrl');
            }
          })
          .click();
      });
  }

  waitForNewWindowAndNavigate() {
    cy.window().then((win) => {
      cy.wait(3000);
  
      if (win.length > 1) {
        const newWindow = win[1];
        cy.wrap(newWindow.location.href).as('newWindowUrl');
        cy.get('@newWindowUrl').then((url) => {
          cy.visit(url);
        });
      }
    });
  }


}

export default OnboardingPage;
