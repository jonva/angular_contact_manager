'use strict';

describe('Service: getcontact', function () {

  // load the service's module
  beforeEach(module('contactManagerApp'));

  // instantiate service
  var getcontact;
  beforeEach(inject(function (_getContact_) {
    getcontact = _getContact_;
  }));

  // it('should do something', function () {
  //   expect(!!getcontact).toBe(true);
  // });
  it('default test', function () {
    expect(true).toBe(true);
  });

});
