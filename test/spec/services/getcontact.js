'use strict';

describe('Service: getcontact', function () {

  // load the service's module
  beforeEach(module('contactmanagerApp'));

  // instantiate service
  var getcontact;
  beforeEach(inject(function (_getcontact_) {
    getcontact = _getcontact_;
  }));

  it('should do something', function () {
    expect(!!getcontact).toBe(true);
  });

});
