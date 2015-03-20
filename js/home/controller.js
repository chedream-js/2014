angular.module('home.controller', [
    'home.model'
])
    .controller('HomeCtrl', function($scope, dreams, $rootScope) {
        $rootScope.title = 'Головна';
        $scope.dreams = dreams.getDreams;
        $scope.isMore = dreams.getMoreDreams;
    });