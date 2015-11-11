'use strict';

/**
 * @ngdoc service
 * @name contactManagerApp.getContact
 * @description
 * # getContact
 * Service in the contactManagerApp.
 */
angular.module('contactManagerApp')
  .service('getContact', function ($q, $http, CONSTANTS) {
    this.getContactList = function(){
	    var deferred = $q.defer();
	    $http.get(CONSTANTS.DEFAULT_CONTACT_LIST).
				then(function(data) {
		        	deferred.resolve(data);
		    	},function(reason){
                    deferred.reject(reason);
            });
		return deferred.promise;
    }; 
  });
