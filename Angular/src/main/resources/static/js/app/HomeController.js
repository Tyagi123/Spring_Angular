'use strict '
 var controllerModule=  angular.module('DPSController', [])

     controllerModule.controller('HomeController',['$scope','HomeService', function($scope,HomeService) {
          $scope.home=function (){
             HomeService.home().then(function(value) {
                       console.log(value.data);
                       $scope.message=value.data.message;
                   }, function(reason) {
                       console.log("error occured");
                   }, function(value) {
                       console.log("no callback");
                   });
                    }
      }]);
