'use strict';

/**
 * @ngdoc directive
 * @name contactManagerApp.directive:createModal
 * @description
 * # createModal
 */
angular.module('contactManagerApp')
  .directive('createModal', function (CONSTANTS) {
    return {
                restrict: 'E',
                replace: true,
                scope: {
                    datasource: '=',
                    searchtext: '=',
                    setupeditmodal: '&',
                    editcontact:'&'

                },
                controller: function($scope) {
                    $scope.setupeditmodalfn = function(searchText) {
                        $scope.setupeditmodal()(searchText);
                    };
                    $scope.editcontactfn = function(id) {
                        $scope.editcontact()(id);
                    };
                    
                },
                templateUrl: CONSTANTS.DIRECTIVE_CREATE_MODAL
            };
  });
