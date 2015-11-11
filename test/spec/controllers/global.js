'use strict';

describe('Controller: GlobalCtrl', function () {

  // load the controller's module
  beforeEach(module('contactManagerApp'));

  var GlobalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlobalCtrl = $controller('GlobalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
