'use strict';

angular.module('userManagementApp')
    .controller('UserListController', 
        [ '$scope', 'UserManagementService', UserListController ]);

function UserListController($scope, UserManagementService) {
    //Load the users 
    UserManagementService.getUsers().then(function(users) {
        $scope.users = users;
    });
}