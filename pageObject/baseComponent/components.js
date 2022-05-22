
const BasePage = require("../basePage");

class Components extends BasePage {
    constructor(page){
        super(page);
    }

    // SELECTORS

    // Popup Selectors
    get classPopup() { return $('.cp-class-details-modal') }
    get classPopupCloseButton() {return $('.cp-btn-modal-close')}
    get classPopupTrainerSection() { return $("//*[text() = 'Our trainer']")}
    get classPopupTrainerName() { return $("div[ng-show='_showTrainerDescription'] > b")}

    //Header Selectors

    get accountMenuItem() { return $('div.cp-nav-main.is-desktop > div.cp-nav-main-center > div > div:nth-child(5)')}



    // METHODS

    async closePopup() {
        await this.classPopupCloseButton.waitForDisplayed()
        await this.classPopupCloseButton.click()
    }


}

module.exports = new Components();