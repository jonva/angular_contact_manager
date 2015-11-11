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
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('home.add', {
            url: '/add',
            templateUrl: 'views/home-add.html'
        })
        
        // url will be /form/interests
        .state('home.edit', {
            url: '/edit',
            templateUrl: 'views/home-edit.html'
        });
        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/');
});