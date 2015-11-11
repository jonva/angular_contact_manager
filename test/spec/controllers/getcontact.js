'use strict';

describe('Controller: GetcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('contactManagerApp'));

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

  
});
