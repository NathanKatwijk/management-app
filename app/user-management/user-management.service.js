'use strict';

angular.module('userManagementApp')
.factory('UserManagementService', [ '$q', function($q) {
    //In real life a proper back-end is invoked, but in thi case a json file in read
    // var usersResource = $resource('/users', {}, {
    //     query: { method: 'GET', cache: true },
    //     update: { method: 'PUT'}
    // });

    return {
        getUsers: getUsers,
        getUser: getUser,
        updateUser: updateUser
    };

    function getUsers() {
        return $http.get('user-list.json').then(function(users) {
            return users;
        });
        //return usersResource.query();
    }

    function getUser(userId) {
        return getUsers().then(function(users) {
            return users.filter(function(user) {
                return user.id === userId;
            });
        });
    }

    function updateUser(user) {
        //should call a real back-end, but that isn't available in the scope of the assignment
        return $q.when();
        //return usersResource.update(user);
    }
}]);