const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open app$/, () =>{
  client.url(client.launchUrl).waitForElementVisible('body', 1000);
  return client;
});
Then(/^I see textbox with value "(.*?)"$/, number => {
  const calc = client.page.calc();
  calc.getValue('@textBox', function(result){
    this.assert.equal(result.value, number);
  });
  return client;
});
Then(/^I change the text box value to "(.*?)"$/, number => {
  const calc = client.page.calc();
  calc.fillInValue('@textBox', number);
  return client;
});

Then(/^I click add button$/, () => {
  const calc = client.page.calc();
  calc.clickAndWait('@addButton');
  return client;
});

Then(/^I click sub button$/, ()  => {
  const calc = client.page.calc();
  calc.clickAndWait('@subButton');
  return client;
});
