// const { Given, When, Then } = require('@cucumber/cucumber');
import { Given, When, Then } from '@cucumber/cucumber';

// const assert = require("assert");

Given(/^I am in home page$/,async function () {
    await browser.url('/')
});
When(/^I click on category "([^"]*)"$/,async function (category) {
    const classNameAndText = await $(`.card-body=${category}`)
    await classNameAndText.scrollIntoView()
    await classNameAndText.click()

});
Then(/^I should be redirected to that "([^"]*)"$/,async function (categoryURL) {
    await browser.url(`/${categoryURL}`)

});
When(/^I click on element category$/, async function () {
    const element = await $('.card-body')
    await element.click();

});


//tst1
When(/^I click on items "([^"]*)"$/, async function (items) {
    const elementsItems = await $(`.text=${items}`)
    await elementsItems.click()

});
Then(/^I should be redirected to items url "([^"]*)"$/,async function (itemsUrl) {
    await browser.url(`/${itemsUrl}`)

});


//tst2
When(/^I fill up the form with initials data$/,async function (datatable) {
    var name = datatable.row[0][0]
    var email = datatable.row[0][1]
    var currentAddress = datatable.row[0][2]
    var permanentAddress =datatable.row[0][3]

    const nameelement = await $('#userName')
    await nameelement.setValue(name)
    const emailElement = await $('#userEmail-wrapper')
    await emailElement.setValue(email)
    const currentAddressElement = await $('#currentAddress-wrapper')
    await currentAddressElement.setValue(currentAddress)
    const permanentAddressElement = await $("#permanentAddress-wrapper")
    await permanentAddressElement.setValue(permanentAddress)

});
When(/^I click on the submit button$/, async function () {
    await $('#submit').click()

});


//tst3
When(/^I click on the dropdown bar$/,async function () {
    const dropdownBar = await $(".rct-icon rct-icon-expand-open")
    await dropdownBar.click();

});
When(/^I choose any option"([^"]*)"$/,async function (option) {
    const options = await $(`.rct-title=${option}`)
    await options.click();

});
Then(/^The selected option message will print"([^"]*)"$/,async function (message) {



});
