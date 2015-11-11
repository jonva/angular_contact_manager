'use strict';

describe('Controller: GlobalcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('contactmanagerApp'));

  var GlobalcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlobalcontrollerCtrl = $controller('GlobalcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GlobalcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
