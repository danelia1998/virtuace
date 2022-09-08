import { ErrorMessages } from '../../fixtures/systemMessages'

class IodinePage {
    get mainPageContainer() {
        return '.home_slider_section'
    }

    get companyTab() {
        return './/a[text()="Company"]'
    }

    get companyCareersTab() {
        return 'a[href="https://iodinesoftware.com/careers-2/"]'
    }

    get applyForThisPositionButton() {
        return 'div[ns-qa="applyBtn"]'
    }

    get questionYesButton() {
        return '.gnewtonQuestionYes'
    }

    get continueButton() {
        return '[ns-qa="continueBtn"]'
    }

    get submitButton() {
        return '#gnewton-submit'
    }

    get chooseMaleOption() {
        return '#male'
    }

    get notAVeteranOption() {
        return '#not-identify'
    }

    get doNotHaveDissabilityOption() {
        return '#not_disability'
    }

    get enterYourNameInSubmitForm() {
        return 'input[ns-qa="yourName"]'
    }

    get calendarInput() {
        return 'input[ns-qa="todayDate"]'
    }

    get firstNameInput() {
        return '#firstName'
    }

    get lastNameInput() {
        return '#lastName'
    }

    get submitFormSubmitButton() {
        return 'button[ns-qa="submitBtn"]'
    }

    get nowHiringSection() {
        return '#now-hiring'
    }

    get iframeSelector() {
        return '#gnewtonIframe'
    }

    get whiteMaleOption() {
        return '[for="race-2"]'
    }

    get emailFieldSubmitForm() {
        return '[ns-qa="emailField"]'
    }

    waitForMainPageContainerToBeVisible = () => {
        cy
        .get(this.mainPageContainer)
        .should('be.visible');
    }

    hoverOnCompanyTab = () => {
        cy.xpath(this.companyTab).first().realHover();
    }

    clickOnCareersOnCompanyAndNavigateTab = () => {
        cy.get(this.companyCareersTab, { timeout: 10000 }).first().realHover().then(function(ln)
        {
            const url= ln.prop('href')
            cy.visit(url)
        }) 
    }

    clickOnSpecificJobTitle = (jobTitle : string) => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(`a[ns-qa="${jobTitle}"]`).should('be.visible').click()
        })
    }

    clickOnApplyOnThisPossition = () => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.applyForThisPositionButton).click()
        })
    }

    answerYesToFirstQuestion = () => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.questionYesButton).first().click();
        })
    }

    answerYesToSecondQuestion = () => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.questionYesButton).eq(1).click();
        })
    }

    clickOnContinueButton = () => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.continueButton).click();
        })  
    }

    clickOnSubmitButton = () => {
        cy.get(this.submitButton).click();
    }

    clickOnMaleOptionButton = () => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.chooseMaleOption).click();
        })
    }

    clickOnWhiteOptionButton = () => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.whiteMaleOption).click();
        })
    }

    clickOnNotAVeteranOption = () => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.notAVeteranOption).click();
        })
    }

    clickOnDoNotHaveDissabilityOption = () => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.doNotHaveDissabilityOption).click();
        })
    }

    enterTextNameInSubmitForm = (name : string) => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.enterYourNameInSubmitForm).type(name);
        })
    }

    enterTextInCalendarInput = (date : string) => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.calendarInput).type(date);
        })
    }

    
    enterNameInForm = (name : string) => {
        cy.wait(2000);
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.firstNameInput).type(name);
        })
    }
    
    enterLastNameInForm = (surname : string) => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.lastNameInput).type(surname);
        })
    }

    clickOnSubmitFormSubmitButton = () => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.submitFormSubmitButton).click();
        })
    }

    checkEmailAlertForAssertion = () => {
        cy.enter(this.iframeSelector).then(getBody => {
            getBody().find(this.emailFieldSubmitForm).then(($input) => {
                expect($input[0]['validationMessage']).to.include(
                    ErrorMessages.pleaseFillOutFieldError
                )
            })
        })
    }

    scrollToNowHiringSection = () => {
        cy.wait(1000);
        cy.get(this.nowHiringSection).scrollIntoView();
    }

}

export default new IodinePage();