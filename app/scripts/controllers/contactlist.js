'use strict';

/**
 * @ngdoc function
 * @name contactManagerApp.controller:ContactlistCtrl
 * @description
 * # ContactlistCtrl
 * Controller of the contactManagerApp
 */
angular.module('contactManagerApp')
    .controller('HomeController', function(getContact, $scope, CONSTANTS, $rootScope, $timeout) {
        $rootScope.contactModel = CONSTANTS.CONTACT_MODEL;
        $scope.addSearchText = '';
        $scope.getContactListFromDefaultList = function() {
            //Get promise
            $scope.contactListPrm = getContact.getContactList();
            //$scope.crustSizePrm = configServices.getCrustSizes();
            //Resolve promise
            $scope.contactListPrm.then(function(response) {
                var contactList = response.data;
                console.log('Received Contact List');
                angular.forEach(contactList, function(contact) {
                    if (angular.isUndefinedOrNull(contact.c_image_url)) {
                        contact.c_img_url = $scope.generateImageUrl();
                    }
                });
                localStorage.setItem('contactList', JSON.stringify(contactList));
                $scope.contactList = contactList;
            }, function(reason) {
                console.log("Did not receive Contact List " + JSON.stringify(reason.statusText));
            });
        };
        if (angular.isUndefinedOrNull(localStorage.getItem('contactList'))) {
            $scope.getContactListFromDefaultList();
        } else {
            $scope.contactList = JSON.parse(localStorage.getItem('contactList'));
        }
        $scope.generateImageUrl = function() {
            return 'images/dp-' + Math.floor((Math.random() * 3) + 1) + '.svg';
        };
        $scope.$watch('contactList', function(newValue, oldValue) {
            if (newValue === oldValue) {
                return false;
            }
            localStorage.setItem('contactList', JSON.stringify($scope.contactList));

        }, true);
        $scope.deleteContact = function(id) {
            angular.forEach($scope.contactList, function(item, index) {
                if (id.toLowerCase() === item.c_id.toLowerCase()) {
                    $scope.contactList.splice(index, 1);
                }
            });
        };
        $scope.addContact = function(contactParamObject) {
            var exists = false;
            angular.forEach($scope.contactList, function(contact) {
                if(contactParamObject.c_id === contact.c_id) {
                    exists = true;
                    angular.forEach(contactParamObject, function(value, key) {
                        contact[key] = value;
                    });
                    $scope.broadcastMessage("Contact " + contactParamObject.c_name + " updated.");
                }
            });
            if (!exists) {
                angular.forEach(contactParamObject, function(value, key) {
                        $rootScope.contactModel[key] = value;
                    });
                
                $scope.contactList.push(contactParamObject);
                $scope.broadcastMessage("Contact " + contactParamObject.c_name + " added.");
            }
        };
        $scope.setupEmptyModal = function(){
            $scope.addSearchText = '';
            $rootScope.contactModel = CONSTANTS.CONTACT_MODEL;
        };
        $scope.setupEditModal = function(nameString){
            $rootScope.contactModel.c_id = '';
            $rootScope.contactModel.c_id = Math.floor((Math.random() * 99999) + 1);
            $rootScope.contactModel.c_name = nameString;
        };
        $scope.editContact = function(contactId) {
            angular.forEach($scope.contactList, function(contact) {
                if (contactId === contact.c_id) {
                    angular.forEach(contact, function(value, key) {
                        $scope.contactModel[key] = value;
                    });
                }
            });

        };
        $scope.broadcastMessage = function(message, type){
             $scope.message = message;
             $scope.messageType = type;
            $timeout(function(){
                $scope.message = '';
                $scope.messageType = '';
            }, 8000);
        };
    });