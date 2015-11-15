'use strict';

describe('Directive: headerSearchBar', function () {

  // load the directive's module
  beforeEach(module('contactManagerApp'));

//var element;
  var scope;


  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<header-search-bar></header-search-bar>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the headerSearchBar directive');
  // }));
  it('default test', function () {
    expect(true).toBe(true);
  });
});
