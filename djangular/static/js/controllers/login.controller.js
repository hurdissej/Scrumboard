/**
 * Created by elliot.hurdiss on 13/02/2017.
 */


(function (){
    'use strict';

    angular
        .module('scrumboard.demo')
        .controller('LoginController',
            /* Add in dependencies in both places */
            ['$scope', '$http', '$location','Login', LoginController]);

    function LoginController($scope, $http, $location, Login) {
        $scope.login = function () {
            Login.login($scope.user)
                .then(function () {
                        $location.url('/');
                    },
                    function () {
                        $scope.login_error = "Invalid Username or password"
                    })
        }
        if (Login.isLoggedIn()) {
            $location.url('/');
        }
    }


})();