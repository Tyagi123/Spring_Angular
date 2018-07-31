'use strict '
 var controllerModule=  angular.module('DPSController', [])

     controllerModule.controller('HomeController',['$scope','HomeService', "$location" , function($scope,HomeService,$location) {
          $scope.home=function (){
             HomeService.home().then(function(value) {
                       console.log(value.data);
                       $scope.message=value.data.message;
                        $scope.error="hahahha";
                        $location.path("home");
                   }, function(reason) {
                       console.log("error occured");
                       $scope.error="hahahha";
                   }, function(value) {
                       console.log("no callback");
                   });
                    }
                       $scope.user=function (){
                                 HomeService.user().then(function(value) {
                                            $location.path("user");
                                       }, function(reason) {
                                           console.log("error occured");
                                       }, function(value) {
                                           console.log("no callback");
                                       });
                                        }
                                           $scope.cache=function (){
                                                     HomeService.cache().then(function(value) {
                                                                $location.path("cache");
                                                           }, function(reason) {
                                                               console.log("error occured");
                                                           }, function(value) {
                                                               console.log("no callback");
                                                           });
                                                            }
      }]);
