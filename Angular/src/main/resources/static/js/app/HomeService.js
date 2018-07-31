 var serviceModule=  angular.module('DPSServices', [])
serviceModule.factory('HomeService', ["$http",function($http,$location) {
    var service = {};
    service.home = function() {
        var url = "home";
        return $http.get(url);
    }


  service.cache = function(name,env) {
     console.log("cache");
        var req = {
            method: 'POST',
            url: 'cache',
         params: { personId: name, env: env }
        }
         return $http(req);
    }

      service.user = function(name,env) {
        console.log("user");
        var req = {
            method: 'POST',
            url: 'user',
         params: { personId: name, env: env }
        }
         return $http(req);
        }
    return service;
}]);