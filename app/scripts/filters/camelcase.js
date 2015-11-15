'use strict';

/**
 * @ngdoc filter
 * @name contactManagerApp.filter:camelCase
 * @function
 * @description
 * # camelCase
 * Filter in the contactManagerApp.
 */
angular.module('contactManagerApp')
  .filter('camelCase', function() {
    return function(input) {
      input = input || '';
      return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
  });