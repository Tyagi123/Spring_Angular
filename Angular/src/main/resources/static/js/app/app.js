var app = angular.module('app', ['ngRoute','DPSController','DPSServices']);

app.config(function($routeProvider) {

$routeProvider.when('/home', {
templateUrl : 'home.html',
controller : 'HomeController'
})
.when('/', {
templateUrl : 'index.html',
controller : 'HomeController',
})
.otherwise({
redirectTo : '/'
    });
});