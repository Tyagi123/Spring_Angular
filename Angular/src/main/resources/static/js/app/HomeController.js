
'use strict'

/*
var module = angular.module('app', []);
module.controller("HomeController", ["$scope", "HomeService",
    function($scope, HomeService) {
      $scope.userDto = {
            userId: null,
            userName: null,
            skillDtos: []
        };
        $scope.skills = [];
        HomeService.home().then(function(value) {
            console.log(value.data);
        }, function(reason) {
            console.log("error occured");
        }, function(value) {
            console.log("no callback");
        });
       /*$scope.saveUser = function() {
            $scope.userDto.skillDtos = $scope.skills.map(skill => {
                return {
                    skillId: null,
                    skillName: skill
                };
            });
            UserService.saveUser($scope.userDto).then(function() {
                console.log("works");
                UserService.getAllUsers().then(function(value) {
                    $scope.allUsers = value.data;
                }, function(reason) {
                    console.log("error occured");
                }, function(value) {
                    console.log("no callback");
                });
                $scope.skills = [];
                $scope.userDto = {
                    userId: null,
                    userName: null,
                    skillDtos: []
                };
            }, function(reason) {
                console.log("error occured");
            }, function(value) {
                console.log("no callback");
            });
        }
    }
]);*/

 /*angular.module('app', [])
    .controller('HomeController', ['$scope',function($scope) {
      $scope.home = function() {
      console.log("bjj")
        if ($scope.text) {
          $scope.text = 'uuygyugyu';
        }
      };
    }]);
    */
 console.log("bjjwewe")
 var controllerModule=  angular.module('DPSController', [])
     controllerModule.controller('HomeController',['$scope','$location','HomeService', function($scope,$location,HomeService) {
            console.log("bjj")
          $scope.firstName = "John";
          $scope.lastName = "Doe";
          $scope.home=function (){
             HomeService.home().then(function(value) {
                       console.log(value.data);
                          $location.url('home');
                   }, function(reason) {
                       console.log("error occured");
                   }, function(value) {
                       console.log("no callback");
                   });
                    }
      }]);
