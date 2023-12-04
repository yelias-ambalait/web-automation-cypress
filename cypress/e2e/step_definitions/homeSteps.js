import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';
import locatorsPage from "../../Locators/locator";
import Data from '../../Data/data'
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new Data();


// Demoblaze Home
Given('User open the demoblaze website', () => {
    cy.visit(data.url)
    cy.wait(data.twoSecond)
})
Then('Check that the home page is displayed', () => {
    cy.xpath(locator.productStore).should('be.visible')
    cy.wait(data.twoSecond)
})
Then("Check that the all functionality is available", () => {
    cy.xpath(locator.home).should('have.text', 'Home (current)')
    cy.wait(data.oneSecond)
    cy.xpath(locator.contact).should('have.text', 'Contact')
    cy.wait(data.oneSecond)
    cy.xpath(locator.aboutUs).should('have.text', 'About us')
    cy.wait(data.oneSecond)
    cy.xpath(locator.login).should('have.text', 'Log in')
    cy.wait(data.oneSecond)
    cy.xpath(locator.signUp).should('have.text', 'Sign up')
    cy.wait(data.oneSecond)
    cy.xpath(locator.category).should('have.text', 'CATEGORIES')
    cy.wait(data.oneSecond)
    cy.xpath(locator.categoryPhone).should('have.text', 'Phones')
    cy.wait(data.oneSecond)
    cy.xpath(locator.categoryLaptop).should('have.text', 'Laptops')
    cy.wait(data.oneSecond)
    cy.xpath(locator.categoryMonitor).should('have.text', 'Monitors')
    cy.wait(data.oneSecond)
    cy.xpath(locator.previousButton).should('have.text', 'Previous')
    cy.wait(data.oneSecond)
    cy.xpath(locator.nextButton).should('have.text', 'Next')
    cy.xpath(locator.footer).should('be.visible')
    cy.wait(data.oneSecond)
})
Then("Check that the 'Previous' and 'Next' button is available", () => {
    cy.xpath(locator.previousButton).should('be.visible')
    cy.xpath(locator.previousButton).should('have.text', 'Previous')
    cy.wait(data.oneSecond)
    cy.xpath(locator.nextButton).should('be.visible')
    cy.xpath(locator.nextButton).should('have.text', 'Next')
    cy.wait(data.oneSecond)
})
Then("Check that the first page's item is visible", () => {
    cy.xpath(locator.firstPageItem1).should('be.visible')
    cy.xpath(locator.firstPageItem6).should('be.visible')
    cy.wait(data.oneSecond)
    cy.xpath(locator.firstPageItem9).should('be.visible')
    cy.wait(data.oneSecond)
})
When("Click on the next button", () => {
    cy.xpath(locator.nextButton).click()
    cy.wait(data.oneSecond)
})
Then("Check that the next page's item is visible", () => {
    cy.xpath(locator.nextPageItem2).should('be.visible')
    cy.wait(data.oneSecond)
    cy.xpath(locator.nextPageItem5).should('be.visible')
    cy.wait(data.oneSecond)
})
Then("Check that the previuos button is available", () => {
    cy.xpath(locator.previousButton).should('be.visible')
    cy.xpath(locator.previousButton).should('have.text', 'Previous')
    cy.wait(data.oneSecond)
})
When("Click on the previous button", () => {
    cy.xpath(locator.previousButton).click()
    cy.wait(data.oneSecond)
})
Then("Check that the first page is visible again", () => {
    cy.xpath(locator.firstPageItem1).should('be.visible')
    cy.xpath(locator.firstPageItem6).should('be.visible')
    cy.wait(data.oneSecond)
    cy.xpath(locator.firstPageItem9).should('be.visible')
    cy.wait(data.oneSecond)
})

// TC_03
Then("Check that the category lists are available", () => {
    cy.xpath(locator.category).should('be.visible')
    cy.xpath(locator.category).should('have.text', 'CATEGORIES')
    cy.wait(data.oneSecond)
    cy.xpath(locator.categoryPhone).should('be.visible')
    cy.xpath(locator.categoryPhone).should('have.text', 'Phones')
    cy.wait(data.oneSecond)
    cy.xpath(locator.categoryLaptop).should('be.visible')
    cy.xpath(locator.categoryLaptop).should('have.text', 'Laptops')
    cy.wait(data.oneSecond)
    cy.xpath(locator.categoryMonitor).should('be.visible')
    cy.xpath(locator.categoryMonitor).should('have.text', 'Monitors')
    cy.wait(data.oneSecond)
})
When("Click on the Mobiles category", () => {
    cy.xpath(locator.categoryPhone).click()
    cy.wait(data.oneSecond)
})
Then("Check that all Mobile items are displayed", () => {
    cy.xpath(locator.mobileGalaxy).should('be.visible')
    cy.xpath(locator.mobileGalaxy).should('have.text', 'Samsung galaxy s6')
    cy.wait(data.oneSecond)
    cy.xpath(locator.mobileNexus).should('be.visible')
    cy.xpath(locator.mobileNexus).should('have.text', 'Nexus 6')
    cy.wait(data.oneSecond)
    cy.xpath(locator.mobileIPhone).should('be.visible')
    cy.xpath(locator.mobileIPhone).should('have.text', 'Iphone 6 32gb')
    cy.wait(data.oneSecond)
})
When("Click on the Laptops category", () => {
    cy.xpath(locator.categoryLaptop).click()
    cy.wait(data.oneSecond)
})
Then("Check that the Laptop items are displayed", () => {
    cy.xpath(locator.laptopSony).should('be.visible')
    cy.xpath(locator.laptopSony).should('have.text', 'Sony vaio i7\n')
    cy.wait(data.oneSecond)
    cy.xpath(locator.laptopMac).should('be.visible')
    cy.xpath(locator.laptopMac).should('have.text', 'MacBook air')
    cy.wait(data.oneSecond)

})
When("Click on the Monitors category", () => {
    cy.xpath(locator.categoryMonitor).click()
    cy.wait(data.oneSecond)
})
Then("Check that the Monitor items are displayed", () => {
    cy.xpath(locator.monitorApple).should('be.visible')
    cy.xpath(locator.monitorApple).should('have.text', 'Apple monitor 24')
    cy.wait(data.oneSecond)
    cy.xpath(locator.monitorAsus).should('be.visible')
    cy.xpath(locator.monitorAsus).should('have.text', 'ASUS Full HD')
    cy.wait(data.oneSecond)

})

// TC_04
When("Click on the signup option", () => {
    cy.xpath(locator.signUp).click()
    cy.wait(data.twoSecond)
})
When("Enter username and password", (dataTable) => {
    const _DataTable = dataTable.rowsHash()
    cy.xpath(locator.signupUsername).type(_DataTable.Username)
    cy.wait(data.twoSecond)
    cy.xpath(locator.signupPassword).type(_DataTable.Password)
    cy.wait(data.twoSecond)
})
When("Click on the signup button", () => {
    cy.xpath(locator.signupButton).click()
    cy.wait(data.twoSecond)

})
When("Check that the popup alert window is displayed", () => {
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Sign up successful,');
        cy.wait(data.threeSecond)
    })

})

// Demoblaze Sign up


// ----------------------------------DemoBlaze End---------------------------------
