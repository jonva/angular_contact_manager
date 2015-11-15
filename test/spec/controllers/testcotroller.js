'use strict';

describe('Controller: TestcotrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('contactManagerApp'));

  var TestcotrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestcotrollerCtrl = $controller('TestcotrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestcotrollerCtrl.awesomeThings.length).toBe(3);
  });
});
