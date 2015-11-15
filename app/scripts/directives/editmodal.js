'use strict';

/**
 * @ngdoc directive
 * @name contactManagerApp.directive:editModal
 * @description
 * # editModal
 */
angular.module('contactManagerApp')
  .directive('editModal', function (CONSTANTS) {
    return {
                restrict: 'E',
                replace: true,
                scope: {
                    datasource: '=',
                    setupemptymodal: '&',
                    addcontact: '&'
                },
                controller: function($scope) {
                    $scope.setupemptymodalfn = function() {
                        $scope.setupemptymodal()();
                    };
                    $scope.addcontactfn = function(contact) {
                        $scope.addcontact()(contact);
                    };
                },
                templateUrl: CONSTANTS.DIRECTIVE_EDIT_MODAL
            };
  });
