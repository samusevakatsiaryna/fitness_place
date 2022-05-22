class BasePage {

    constructor(page) {
        this.page = page;
    }

    get ad() { return $('.snrs-modal-btn-close')}
    get calendarLoader() { return $('.cp-calendar-loader')}

    async navigate(url) {
        await browser.url(url);
        await this.calendarLoader.waitForDisplayed({ reverse: true })
    }

    async closeAd() {
        await this.ad.waitForDisplayed();
        await this.ad.click();
        await this.calendarLoader.waitForDisplayed({ reverse: true })
    }


    async click(element) {
       await element.waitForDisplayed()
       await element.click()
    }

    async setValue(element, value) {
       await element.waitForDisplayed()
       await element.setValue(value)
    }

    async getText(element) {
        await element.waitForDisplayed();
        return element.getText();
    }

    async elementDisplayed(element) {
        await element.waitForDisplayed();
        return element.isDisplayed()
    }


}

module.exports = BasePage;