const { $ } = require('@wdio/globals')
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[name = "username"]');
    }

    get inputPassword () {
        return $("[name = 'password']");
    }

    get btnSubmit () {
        return $('[id ="submit"]');
    }
    get loginMessage () {
        return $(".post-title");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async checkMessage(msg){
        await expect (this.loginMessage).toHaveTextContaining(msg)
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new LoginPage();
