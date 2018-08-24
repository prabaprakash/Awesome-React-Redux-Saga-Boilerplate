Feature: Google Search

Scenario: Add

  Given I open app
  And I see textbox with value "100"
  Then I click add button
  And I see textbox with value "101"
  Then I click add button
  And I see textbox with value "102"

Scenario: Sub

  Given I open app
  And I see textbox with value "100"
  Then I click sub button
  And I see textbox with value "99"
  Then I click sub button
  And I see textbox with value "98"

Scenario: Change

  Given I open app
  And I see textbox with value "100"
  Then I change the text box value to "1000"
  Then I click add button
  And I see textbox with value "1001"
  Then I click sub button
  And I see textbox with value "1000"