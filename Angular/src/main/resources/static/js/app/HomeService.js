 var serviceModule=  angular.module('DPSServices', [])
serviceModule.factory('HomeService', ["$http",function($http,$location) {
    var service = {};
    service.home = function() {
        var url = "home";
        return $http.get(url);
    }
  service.cache = function() {
  console.log("cache");
     var url = "home";
     return $http.get(url);
    }
      service.user = function() {
        console.log("user");
        var url = "home";
         return $http.get(url);
        }
    return service;
}]);