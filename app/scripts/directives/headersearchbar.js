'use strict';

/**
 * @ngdoc directive
 * @name contactManagerApp.directive:headerSearchBar
 * @description
 * # headerSearchBar
 */
angular.module('contactManagerApp')
  .directive('headerSearchBar', function (CONSTANTS) {
    return {
                restrict: 'E',
                replace: true,
                scope: {
                    searchtext: '=',
                    setupemptymodal: '&',
                    messagetext: '='
                },
                controller: function($scope) {
                    $scope.setupemptymodalfn = function() {
                        $scope.setupemptymodal()();
                    };
                },
                templateUrl: CONSTANTS.DIRECTIVE_HEADER_SEARCH_BAR
            };
  });
