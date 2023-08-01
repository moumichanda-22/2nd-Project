const {Given, Then, When} = require('@cucumber/cucumber');
// Then(/^I valid the page at page header "([^"]*)"$/, async function (titletext) {
//     const title = await $('body > div.mui-container-fluid.content > div > div.mui-col-md-6.tutorial-content > h1:nth-child(1)')
//     await expect(title).toHaveTitle(titletext)
//
// });
When(/^I enter First name as(.*) ans last name as(.*)$/, async function (fname, lname) {
    const firstname = await $('input[name="firstname"]')
    await firstname.setValue(fname)
    const lastname = await $('input[name="lastname"]')
    await lastname.setValue(lname)

});
When(/^I select the gander as(.*) and year of experience as(.*)$/, async function (gender,years) {
    const gender_ratio = await $$('input[name="sex"]')
    const yr_ex = await $$('input[name="exp"]')

    for (let i=0;i<gender_ratio.length;i++){
        const element = await (gender_ratio[i]).getAttribute('value')
        if (element===gender){
            await (gender_ratio[i]).click()
            break;
        }
    }
    for (let i=0;i<yr_ex;i++){
        const element = await (yr_ex[i]).getAttribute('value')
        if (element===years){
            await (yr_ex[i]).click()
            break;
        }
    }

});
When(/^I enter date (.*) , profession(.*),automation Tools (.*)$/, async function (profession) {
    const prof = await $$()

});
When(/^I select the continents (.*) and commands(.*)$/, async function () {

});
When(/^Click on the download link(.*)$/, async function () {

});
Then(/^Summit the page by clicking button$/, async function () {

});
Given(/^The page header should be "([^"]*)"$/, async function (title) {
    // const actualTitle = browser.getTitle
    expect(browser).toHaveTitle(title)
});
When(/^I fill up the form with following data$/, async function (dataTable) {

    var email = dataTable.raw()[0][0]
    var orderReference = dataTable.raw()[0][1]
    var subjectHeading = dataTable.raw()[0][2]
    var message = dataTable.raw()[0][3]

    const emailElement = await $('#email')
    await emailElement.setValue(email)
    const orderReferenceElement = await $('#id_order')
    await orderReferenceElement.setValue(orderReference)
    const selectElem = await $("#id_contact")
    await selectElem.selectByVisibleText(subjectHeading);
    const messageBox = await $('#message')
    await messageBox.setValue(message)

    await $('#submitMessage').click()

    browser.pause(3000)
});
