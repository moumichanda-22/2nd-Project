@login
Feature: To test the login functionality in "The Internet Herokuapp"

  Background:
    Given the user is on login page

  Scenario Outline: The one where user logs in using valid credentials
    When the user enters username as "<username>" and password as "<password>!"
    And clicks on login button
    Then the user must navigate to secure area page displaying a message "<message>"

    Examples:
      | username | password            | message                        |
      | tomsmith | SuperSecretPassword | You logged into a secure area! |

