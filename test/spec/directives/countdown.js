'use strict';

describe('Directive: countdown', function () {

  // load the directive's module
  beforeEach(module('angularDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<countdown></countdown>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the countdown directive');
  }));
});
