
const BasePage = require ('./basePage');

class LoginPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
    }

    get emailField() { return $('input[name="Login"]') }
    get passwordField() { return $('input[name="Password"]') }
    get loginButton() { return $('.cp-login-btn-login') }
    get errorBlock() { return $('.block-danger') }

    async enterEmailPassword(email, password) {
        await this.emailField.waitForDisplayed();
        await this.emailField.setValue(email);
        await this.passwordField.waitForDisplayed();
        await this.passwordField.setValue(password);
    }

}

module.exports = new LoginPage();