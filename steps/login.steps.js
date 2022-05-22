const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');

const BasePage = require('../pageObject/basePage')
const LoginPage = require('../pageObject/loginPage');
const HomePage = require('../pageObject/homePage');
const { loginButton } = require('../pageObject/loginPage');
const { logo } = require('../pageObject/homePage');

Given("I am on Login page", async () => {
    await LoginPage.navigate('/ClientPortal2/#/Login')
})

When(/^I enter "([^"]*)" and "([^"]*)"$/, async(email, password) => {
    await LoginPage.enterEmailPassword(email, password)
})

When("I click Login button", async () => {
    await LoginPage.click(loginButton)
})

Then ("Logo is displayed", async () => {
    expect(await HomePage.elementDisplayed(logo)).to.equal(true)
})
