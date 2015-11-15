'use strict';

/**
 * @ngdoc directive
 * @name contactManagerApp.directive:contactCard
 * @description
 * # contactCard
 */
angular.module('contactManagerApp')
  .directive('contactCard', function (CONSTANTS) {
    return {
                restrict: 'E',
                replace: true,
                scope: {
                    datasource: '=',
                    searchtext: '=',
                    editcontact: '&',
                    deletecontact: '&'
                },
                controller: function($scope) {
                    $scope.editcontactfn = function(id) {
                        $scope.editcontact()(id);
                    };
                    $scope.deletecontactfn = function(id) {
                        $scope.deletecontact()(id);
                    };
                },
                templateUrl: CONSTANTS.DIRECTIVE_CONTACT_CARD
            };
  });