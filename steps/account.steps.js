const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');


const AccountPage = require('../pageObject/accountPage');
const Components = require('../pageObject/baseComponent/components');
const { accountMenuItem } = require('../pageObject/baseComponent/components');
const { checkUserId } = require('../pageObject/accountPage');


When("I click Account Menu Item", async () => {
    await Components.elementDisplayed(accountMenuItem);
    await Components.accountMenuItem.click();
})

Then("User's Id matchs URL Id", async () => {
    let accountUrl = await AccountPage.getUserId();
    expect(accountUrl).to.equal(`${browser.options.baseUrl}/ClientPortal2/#/Profile/Edit?userId=260939`)
})