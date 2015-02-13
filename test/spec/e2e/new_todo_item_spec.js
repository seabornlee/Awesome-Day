'use strict';

describe('New todo item', function() {
  it('should clear todo name after new item created', function() {
    browser.get('http://localhost:9000/');

    element(by.model('todoName')).sendKeys('Kiss my sons')
    element(by.model('todoName')).sendKeys(protractor.Key.ENTER)

    expect(element(by.model('todoName')).getAttribute('value')).toEqual('')
  });
});
