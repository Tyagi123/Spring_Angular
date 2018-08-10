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
                                 HomeService.user($scope.personId,$scope.Environment).then(function(value) {
                                 $scope.listUser=value.data;
                                            $location.path("user");
                                       }, function(reason) {
                                           console.log("error occured");
                                       }, function(value) {
                                           console.log("no callback");
                                       });
                                        }



                                           $scope.cache=function (){
                                                     HomeService.cache($scope.personId,$scope.Environment).then(function(value) {
                                                     console.log("cache");
                                                      $scope.cacheObj=value.data;
                                                                $location.path("cache");
                                                           }, function(reason) {
                                                               console.log("error occured");
                                                           }, function(value) {
                                                               console.log("no callback");
                                                           });
                                                            }


                                           $scope.appStatus=function (){
                                                     HomeService.appStatus().then(function(value) {
                                                     console.log("cache");
                                                      $scope.listStatus=value.data;
                                                                $location.path("appstatus");
                                                           }, function(reason) {
                                                               console.log("error occured");
                                                           }, function(value) {
                                                               console.log("no callback");
                                                           });
                                                            }
      }]);
