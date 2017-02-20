/**
 * Created by elliot.hurdiss on 15/02/2017.
 */
(function () {
    'use strict';

    angular
        .module('scrumboard.demo')
        .service( 'Login', ['$http','$location', Login]);

    function Login($http, $location) {
        this.login = login;
        this.logout = logout;
        this.redirectIfNotLoggedIn = redirectIfNotLoggedIn;
        this.isLoggedIn = isLoggedIn;
        this.boardredirect = boardredirect;

        function login(credentials) {
            return $http.post('/auth_api/login/', credentials)
                .then(function (response) {
                    localStorage.currentUser = JSON.stringify(response.data);
                });
        }

        function isLoggedIn() {
            return !!localStorage.currentUser;
        }

        function logout() {
            delete localStorage.currentUser;
            $http.get('/auth_api/logout/').then(function () {
                $location.url('/login');
            });
        }

        function boardredirect() {
            if (isLoggedIn()) {
                $location.url('/overview');
            }
        }

        function redirectIfNotLoggedIn() {
            if (!isLoggedIn()) {
                $location.url('/login');
            }
        }
    }
})();