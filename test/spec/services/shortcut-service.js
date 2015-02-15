'use strict';

describe('Service: shortcutService', function () {

  // load the service's module
  beforeEach(module('angularDemoApp'));

  // instantiate service
  var shortcutService;
  beforeEach(inject(function (_shortcutService_) {
    shortcutService = _shortcutService_;
  }));

  it('should do something', function () {
    expect(!!shortcutService).toBe(true);
  });

});
