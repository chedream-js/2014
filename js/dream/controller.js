angular.module('dream.controller', [
    'dream.model'
])
    .controller('DreamCtrl', function($scope, dream, $rootScope) {

        $rootScope.title = dream.slug;
        $scope.currentDream = dream.getDream;

    });