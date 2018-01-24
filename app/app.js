'use strict';

// Declare app level module which depends on views, and components
var managementApp = angular.module('userManagementApp', ['ui.router']);

managementApp.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('userList', {
      url: '/users',
      templateUrl: 'user-management/user-list/user-list.template.html',
      controller: 'UserListController'
    })
    .state('user', {
      url: '/users/:userId',
      templateUrl: 'user-management/user/user.template.html',
      controller: 'UserController'
    });

    $urlRouterProvider.otherwise('/users');
}]);

// managementApp.run([
//   '$rootScope',
//   function($rootScope) {
//     // see what's going on when the route tries to change
//     $rootScope.$on('$routeChangeStart', function(event, next, current) {
//       // next is an object that is the route that we are starting to go to
//       // current is an object that is the route where we are currently
//       var currentPath = current.originalPath;
//       var nextPath = next.originalPath;

//       console.log('Starting to leave %s to go to %s', currentPath, nextPath);
//     });
//   }
// ]);
