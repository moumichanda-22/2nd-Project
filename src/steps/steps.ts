const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page')

Given(/^the user is on login page$/, async function () {
    await LoginPage.open()
    await expect(browser).toHaveTitle('The Internet');

});
When(/^the user enters username as "([^"]*)" and password as "([^"]*)"$/, async function (username, password) {
    await LoginPage.userNameTextBox.setValue(username);
    await LoginPage.passwordTextBox.setValue(password);
});
When(/^clicks on login button$/, async function () {
    await LoginPage.loginButton.click();
});
Then(/^the user must navigate to secure area page displaying a message "([^"]*)"$/, async function (successMessage) {

    await expect(SecurePage.secureAreaElement).toExist();
    await expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');
    await expect(SecurePage.messageElement).toExist();
    await expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});
Given(/^I navigate to "([^"]*)" site$/, async function (siteURL) {
    await browser.url(siteURL)
});
Given(/^I click on "([^"]*)" form$/, async function (formText) {
   await $('#contact-link').click()
    await browser.pause(5000)
});
