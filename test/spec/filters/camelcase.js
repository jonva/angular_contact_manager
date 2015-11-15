'use strict';

describe('Filter: camelCase', function () {

  // load the filter's module
  beforeEach(module('contactManagerApp'));

  // initialize a new instance of the filter before each test
  var camelCase;
  beforeEach(inject(function ($filter) {
    camelCase = $filter('camelCase');
  }));

  it('should return the input prefixed with "camelCase filter:"', function () {
    expect(camelCase("abc")).toBe('Abc');
  });

});
