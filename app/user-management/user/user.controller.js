'use strict';

angular.module('userManagementApp')
    .controller('UserController', 
        [ '$scope', '$stateParams', 'UserManagementService', UserController ]);
    
function UserController($scope, $stateParams, UserManagementService) {
    $scope.bla = "BLAAT";
}