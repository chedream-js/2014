angular.module('addDream.controller', [
    'addDream.model'
])
    .controller('AddDreamCtrl', function($scope, addDream, $rootScope) {

        $scope.currentDream = function() { return {} };
        $rootScope.title = 'Створення мрії';

    });