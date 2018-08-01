var app = angular.module('app', ['ngRoute','DPSController','DPSServices']);

app.config(function($routeProvider) {

$routeProvider.when('/home', {
templateUrl : 'views/home.html',
controller : 'HomeController'
})
.when('/user', {
templateUrl : 'views/user.html',
controller : 'HomeController'
})
.when('/cache', {
templateUrl : 'views/cache.html',
controller : 'HomeController'
});
});