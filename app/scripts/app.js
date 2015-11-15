'use strict';

/**
 * @ngdoc overview
 * @name contactManagerApp
 * @description
 * # contactManagerApp
 *
 * Main module of the application.
 */
angular
    .module('contactManagerApp', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap'
    ])

.config(function($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    angular.isUndefinedOrNull = function(val) {
        return angular.isUndefined(val) || val === null;
    };
    $stateProvider
        //Home state that you get when you hit the app
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        });
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/');
});