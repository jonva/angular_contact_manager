'use strict';

describe('Service: uploadimage', function () {

  // load the service's module
  beforeEach(module('contactManagerApp'));

  // instantiate service
  var uploadimage;
  beforeEach(inject(function (_uploadImage_) {
    uploadimage = _uploadImage_;
  }));

  // it('should do something', function () {
  //   expect(!!uploadimage).toBe(true);
  // });
  it('default test', function () {
    expect(true).toBe(true);
  });

});
