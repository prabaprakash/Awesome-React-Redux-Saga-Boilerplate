const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google`s search page$/, () => client
  .url('http://google.com')
  .waitForElementVisible('body', 1000));
Then(/^the title is "(.*?)"$/, (text) => client.assert.title(text));
Then(/^the Google search form exists$/, () => client.assert.visible('input[name="q"]'));

When(/^I search for (.*?)$/, (expression) => client
  .setValue('input[name=q]', expression)
  .submitForm('input[name=q]'));
Then(/^the search result should contain (.*?)$/, (result) => client.assert.containsText('body', result));
