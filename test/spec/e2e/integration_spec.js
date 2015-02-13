'use strict';

describe('Integration', function() {
  it('should pass all steps', function() {
    browser.get('http://localhost:9000/');

    element(by.model('todoName')).sendKeys('Kiss my sons')
    element(by.model('todoName')).sendKeys(protractor.Key.ENTER)

    element(by.css('input[type=checkbox]')).click()
    element(by.css('.remove-item')).click()

    expect(element(by.tagName('body')).getText()).not.toContain('Kiss my sons')
  });
});
