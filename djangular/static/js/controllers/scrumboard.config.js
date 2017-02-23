/**
 * Created by elliot.hurdiss on 11/02/2017.
 */

(function (){
    'use strict';

    angular.module('scrumboard.demo')
        .config(['$routeProvider', config])
        .run(['$http', run]);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/html/overview.html',
                controller: 'ScrumboardController'
            })
            .when('/login', {
                templateUrl: '/static/html/login.html',
                controller: 'LoginController'
            })
            .when('/board/:boardID', {
                templateUrl: '/static/html/scrumboard.html',
                controller: 'ScrumboardController'
            })
            .when('/menu', {
                templateUrl: '/static/html/menu.html',
                controller: 'ScrumboardController'
            })
            .otherwise('/')
    }
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();