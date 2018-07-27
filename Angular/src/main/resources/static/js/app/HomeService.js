'use strict'
 var serviceModule=  angular.module('DPSServices', [])
serviceModule.factory('HomeService', ["$http", "CONSTANTS", function($http, CONSTANTS) {
    var service = {};
    service.home = function() {
        var url = CONSTANTS.homeurl;
        return $http.get(url);
    }
  /*  service.getAllUsers = function() {
        return $http.get(CONSTANTS.getAllUsers);
    }
    service.saveUser = function(userDto) {
        return $http.post(CONSTANTS.saveUser, userDto);
    } */
    return service;
}]);