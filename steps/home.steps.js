const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');


const HomePage = require('../pageObject/homePage');
const Components = require('../pageObject/baseComponent/components')
const { calendarDates, activeClub} = require('../pageObject/homePage');
const { classPopup } = require('../pageObject/baseComponent/components');

Given("I am on Home Page", async () => {
    await HomePage.navigate('/ClientPortal2/#/Classes/18/Calendar')
    await HomePage.closeAd();
})

Then("Selected Club displayed in Title", async () => {
    let clubName = await HomePage.selectRandomClub();
    let titleName = await HomePage.activeClub.getText()
    expect(clubName).to.equal(titleName)
})

Then("Calendar starts from the current date", async () => {
    let firstDate = await HomePage.compareCurrentDates();
    let currentDay = HomePage.calculateCurrentDay();
    expect(await firstDate[0]).to.have.string(currentDay);
})

When("I can open Class poup", async () => {
    await HomePage.clickClass();
    expect(await Components.elementDisplayed(classPopup)).to.equal(true);
})

Then("I can close Class popup", async () => {
    await Components.closePopup();
    let isExit = await Components.classPopup.isExisting()
    expect(isExit).to.equal(false);
})

