angular.module('contacts.controller', [
    'contacts.model'
])
    .controller('ContactsCtrl', function($scope, contacts) {
        $scope.info = contacts.getInfo();
    });