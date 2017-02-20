/**
 * Created by elliot.hurdiss on 08/02/2017.
 */

(function () {
    'use strict';
    angular.module('scrumboard.demo', ['ngRoute', 'as.sortable'])
        .controller('ScrumboardController',
            ['$scope', '$http','Login', ScrumboardController]);
    function ScrumboardController($scope, $http, Login) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };

            $http.post('/scrumboard/cards/', card)
                .then(function(response) {
                    list.cards.push(response.data);
                },
                function () {
                    alert("Could not create Card")
                });


        };


        $scope.data = [];
        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });

        $scope.boards = [];
        $http.get('/scrumboard/boards/').then(function(response){
            $scope.boards = response.data;
        });

        $scope.sortBy = 'business_value';
        $scope.reverse = true;
        $scope.filter = false;

        Login.redirectIfNotLoggedIn();
        $scope.logout = Login.logout;
        $scope.boardredirect = Login.boardredirect;


    }

}());