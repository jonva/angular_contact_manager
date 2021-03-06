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
        $scope.contactModel = {};
        $scope.assignContactModel = function() {
            $scope.contactModel = {
                "c_id": "",
                "c_name": "",
                "c_email": "",
                "c_nickname": "",
                "c_company": "",
                "c_comments": "",
                "c_img_url": "images/dp-grey.svg"
            };
        };
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
                if (id === item.c_id) {
                    $scope.contactList.splice(index, 1);
                    if ($scope.contactList.length === 0) {
                        $scope.broadcastMessage("No contacts to show. Please add a new contact.", '', 1000000);
                    } else {
                        $scope.broadcastMessage(item.c_name + " deleted", '');
                    }
                }
            });

        };
        $scope.addContact = function(contactParamObject) {
            var exists = false;
            angular.forEach($scope.contactList, function(contact) {
                if (contactParamObject.c_id === contact.c_id) {
                    exists = true;
                    angular.forEach(contactParamObject, function(value, key) {
                        contact[key] = value;
                    });
                    $scope.broadcastMessage("Contact " + contactParamObject.c_name + " updated.");
                }
            });
            if (!exists) {
                angular.forEach(contactParamObject, function(value, key) {
                    $scope.contactModel[key] = value;
                });

                $scope.contactList.push(contactParamObject);
                $scope.broadcastMessage("Contact " + contactParamObject.c_name + " added.");
            }
        };
        $scope.setupEmptyModal = function() {
            $scope.addSearchText = '';
            $scope.assignContactModel();
        };
        $scope.setupEditModal = function(nameString) {
            $scope.setupEmptyModal();
            $scope.contactModel.c_id = '';
            $scope.contactModel.c_id = Math.floor((Math.random() * 99999) + 1);
            $scope.contactModel.c_name = nameString;
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
        $scope.broadcastMessage = function(message, type, time) {
            $scope.message = message;
            $scope.messageType = type;
            var timeValue = time;
            if (isNaN(parseInt(timeValue, 10))) {
                timeValue = 8000;
            }
            $timeout(function() {
                $scope.message = '';
                $scope.messageType = '';
            }, parseInt(timeValue, 10));
        };
        if (angular.isUndefinedOrNull(localStorage.getItem('contactList'))) {
            $scope.getContactListFromDefaultList();
        } else {
            $scope.contactList = JSON.parse(localStorage.getItem('contactList'));
            if ($scope.contactList.length === 0) {
                $scope.broadcastMessage("No contacts to show. Please add a new contact.", '', 1000000);
            }
        }
    });