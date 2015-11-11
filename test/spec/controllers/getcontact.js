'use strict';

describe('Controller: GetcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('contactmanagerApp'));

  var GetcontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetcontactCtrl = $controller('GetcontactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetcontactCtrl.awesomeThings.length).toBe(3);
  });
});
