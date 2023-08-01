@register
Feature: Register form

  As an user I should be able to perform all the expected actions


  Scenario: User should be able to send a contact form
    Given I navigate to "http://automationpractice.com/" site
    And The page header should be "My Store"
    And I click on "Contact us" form
    And I fill up the form with following data
      | test@test.com | Test Reference | Webmaster | Test message box |
  @onlyThis
  Scenario: User should be able to send a contact form
    Given I navigate to "http://automationpractice.com/" site
    And The page header should be "My Store"
    And I click on "Contact us" form
    And I fill up the form with following data
      | test@test.com | Test Reference | Webmaster | Test message box |
