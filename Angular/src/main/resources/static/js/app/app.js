'use strict'
var app = angular.module('app', ['DPSController','DPSServices'
]);
app.constant("CONSTANTS", {
    homeurl: "home",
    getAllUsers: "/user/getAllUsers",
    saveUser: "/user/saveUser",
    baseUrl:"/"
});

