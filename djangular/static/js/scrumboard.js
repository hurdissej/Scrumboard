/**
 * Created by elliot.hurdiss on 08/02/2017.
 */

(function () {
    'use strict';
    angular.module('scrumboard.demo', ['ngRoute'])
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
        /** Insert redirects and logouts **/
        Login.redirectIfNotLoggedIn();
        $scope.data = [];
        $scope.logout = Login.logout;
        $scope.sortBy = 'business_value';
        $scope.reverse = True;
        $scope.filter = False
        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });


    }

}());