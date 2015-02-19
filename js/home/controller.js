angular.module('home.controller', [
    'home.model'
])
    .controller('HomeCtrl', function($scope, dreams) {
        $scope.dreams = dreams.getDreams();
    });