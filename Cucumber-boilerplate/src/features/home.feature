Feature: The internet home webpage
  As an user I Should be able to perform all the actions as expected


  @tst
  Scenario Outline: User should be able to redirected to all the categories
    Given I am in home page
    When I click on category "<category>"
    Then I should be redirected to that "<categoryURL>"
    Examples:
      | category                | categoryURL   |
      | Elements                | elements      |
      | Forms                   | forms         |
      | Alerts, Frame & Windows | alertsWindows |


  @tst1
  Scenario Outline: User should be able to redirected to all the elements category items
    Given I am in home page
    When I click on element category
    And I click on items "<items>"
    Then I should be redirected to items url "<itemsUrl>"
    Examples:
      | items        | itemsUrl     |
      | Text Box     | text-box     |
      | Check Box    | checkbox     |
      | Radio Button | radio-button |
      | Web Tables   | webtables    |


  @tst2
  Scenario  User should be able to fill up the text box
    Given I navigate to "https://demoqa.com/text-box" site
    When I fill up the form with initials data
      | moumi | m@gmail.com | Nyc | Bangladesh |
    And I click on the submit button


  @tst3
  Scenario Outline: User should be able to perform all the functions in check box category
    Given I navigate to "https://demoqa.com/checkbox" site
    When I click on the dropdown bar
    And I choose any option"<option>"
    Then The selected option message will print"<message>"
    Examples:
      | option   | message                |
      | Desktop  | desktop notes commands |
      | Commands | commands               |


  @tst4

















