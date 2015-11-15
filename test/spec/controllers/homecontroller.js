'use strict';

describe('Controller: HomeController', function () {

   var HomeController,
    scope, getContact;
  // load the controller's module
  beforeEach(module('contactManagerApp', function($provide){
    getContact = jasmine.createSpyObj("getContact", ["getContactList"]);
    getContact.getContactList.andReturn({
    name: "Nikhil"
  });
    $provide.value("getContact",getContact);
  }));

  
 

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _getContact_) {
    scope = $rootScope.$new();
    getContact = _getContact_;
    HomeController = $controller('HomeController', {
      $scope: scope,
      getContact: getContact
    });
  }));

  it('Default contact model to be fetched from constants file', function () {
    expect(getContact.getContactList).toHaveBeenCalled();
  });

});
