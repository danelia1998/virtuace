///<reference types="cypress" />
///<reference types="cypress-xpath" />
require("cypress-xpath")
import IodinePage from '../../helpers/locators/iodine.page';
import { ErrorMessages } from "../../fixtures/systemMessages"

describe('User Job Application submission flow', () => {
    const jobTitle = 'SDET';
    const name = 'Davit';
    const lastName = 'Danelia';
    const todayDate = '2022-09-08';

    before(() => {
        cy.viewport(1280, 720)
        cy.visit(`${Cypress.env("URL")}`);
    })

    it('Visit page and check if site is shown right', () => {
        IodinePage.waitForMainPageContainerToBeVisible();
        IodinePage.hoverOnCompanyTab();
        IodinePage.clickOnCareersOnCompanyAndNavigateTab();
        IodinePage.scrollToNowHiringSection();
        IodinePage.clickOnSpecificJobTitle(jobTitle);
        IodinePage.clickOnApplyOnThisPossition();
        IodinePage.answerYesToFirstQuestion();
        IodinePage.answerYesToSecondQuestion();
        IodinePage.clickOnContinueButton();
        IodinePage.clickOnContinueButton();
        IodinePage.clickOnMaleOptionButton();
        IodinePage.clickOnWhiteOptionButton();
        IodinePage.clickOnContinueButton();
        IodinePage.clickOnNotAVeteranOption();
        IodinePage.clickOnContinueButton();
        IodinePage.clickOnDoNotHaveDissabilityOption();
        IodinePage.enterTextNameInSubmitForm(name);
        IodinePage.enterTextInCalendarInput(todayDate);
        IodinePage.clickOnContinueButton();
        IodinePage.enterNameInForm(name);
        IodinePage.enterLastNameInForm(lastName );
        IodinePage.clickOnSubmitFormSubmitButton();
        IodinePage.checkEmailAlertForAssertion();


    })
})