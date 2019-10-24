'use strict';
const waitForEventChange = 250;
const timeoutForElementVisible = 10000;

const mainCommands = {
  waitFor: function (milliseconds) {
    this.api.pause(milliseconds);
  },
  waitForPageToLoad: function (selector) {
    this.waitForElementVisible( selector, timeoutForElementVisible);
  },
  waitForVisible: function (selector, timeout) {
    this.waitForElementVisible(selector, timeout || timeoutForElementVisible);
  },
  waitForNotVisible: function (selector, timeout) {
    this.waitForElementNotVisible(selector, timeout || timeoutForElementVisible);
  },
  waitForPresent: function (selector, timeout) {
    this.waitForElementPresent(selector, timeout || timeoutForElementVisible);
  },
  waitForNotPresent: function (selector, timeout) {
    this.waitForElementNotPresent(selector, timeout || timeoutForElementVisible);
  },
  clickAndWait: function (element) {
    this.click(element);
    this.api.pause(waitForEventChange);
  },
  fillInValue: function (element, value) {
    this.clearValue(element);
    this.setValue(element, value);
    return this;
  },
  clickToTriggerJSEvent: function (element) {
    this.click(element);
    this.waitForAnimation();
  },
};
module.exports = {
  commands: [mainCommands],
  elements: {
    body: 'body',
    addButton: '#app > div > div > div > button:nth-child(1)',
    subButton: '#app > div > div > div > button:nth-child(3)',
    textBox: '#app > div > div > div > input',
  },
};
