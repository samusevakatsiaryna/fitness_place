const BasePage = require ('./basePage');

class AccountPage extends BasePage{

    constructor(page){
        super(page);
    }

    get accountLoader() { return $('.personal-data-section') }

    async getUserId() {
        await this.accountLoader.waitForDisplayed();
        return await browser.getUrl();

    }

}

module.exports = new AccountPage();