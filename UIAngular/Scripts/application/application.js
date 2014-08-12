﻿var app = angular.module("main", ['ngRoute', 'uiAngularControllers', 'uiAngularServices','ui.bootstrap','ngAnimate']);
app.value('$', $);

var uiAngularControllers = angular.module("uiAngularControllers", []);
var uiAngularServices = angular.module('uiAngularServices', ['ngResource']);

//URL MAPPINGS
app.config(function ($routeProvider) {
    $routeProvider.
      when('/Home/ViewReads', {
          templateUrl: '/Home/ViewReads',
          controller: 'ViewReadsController'
      }).
      when('/Home/CreateRead', {
            templateUrl: '/Home/CreateRead',
            controller: 'CreateReadController'
        }).
      when('/Home/about', {
          templateUrl: '/Home/About',
          controller: 'AboutController'
      }).
      otherwise({
          redirectTo: '/404'
      });


});

//Initialization
app.run(['SignalRHubService', function (SignalRHubService) {

    SignalRHubService.initialize();



}]);

