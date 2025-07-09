import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import appointmentsPage from '../../support/pages/appointmentsPage';

Given('I click on Appointments in the sidebar menu', () => {
  cy.wait(2000);
  appointmentsPage.clickAppointments();
});

Then('I should be on the Appointments page', () => {
  appointmentsPage.validateAppointmentsPage();
});

When('I click on Schedule Appointment', () => {
  appointmentsPage.clickScheduleAppointment();
});

Then('I should see the Choose Your Doctor page', () => {
  appointmentsPage.validateChooseYourDoctorPage();
});

Then('I should see the Automation Doctor', () => {
  appointmentsPage.validateAutomationDoctor();
});

When('I click on Automation Doctor', () => {
  appointmentsPage.clickAutomationDoctor();
});

Then('I select the first available date', () => {
  appointmentsPage.clickFirstAvailableDate();
});

Then('I select the first available time slot', () => {
  appointmentsPage.clickFirstAvailableTime();
});

When('I enter {string} in the additional notes field', (notes) => {
  appointmentsPage.typeAdditionalNotes(notes);
});

When('I click on the confirm book button', () => {
  appointmentsPage.clickConfirmBookButton();
});

Then('I should see the booking confirmation message', () => {
  appointmentsPage.validateBookingConfirmation();
});
