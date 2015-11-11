'use strict';

/**
 * @ngdoc function
 * @name contactManagerApp.controller:GlobalcontrollerCtrl
 * @description
 * # GlobalcontrollerCtrl
 * Controller of the contactManagerApp
 */
angular.module('contactManagerApp')
  .controller('GlobalcontrollerCtrl', function ($scope, CONSTANTS, $rootScope) {
    $scope.searchText = '';

    $scope.contactList = [];

    $rootScope.contactModel = CONSTANTS.CONTACT_MODEL;

  });
