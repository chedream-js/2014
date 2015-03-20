angular.module('editDream.controller', [
    'editDream.model'
])
    .controller('EditDreamCtrl', function($scope, editDream, $rootScope) {

        $rootScope.title = 'Редагування мрії';
        $scope.currentDream = editDream.getDream;

    });