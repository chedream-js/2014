angular.module('contacts.controller', [
    'contacts.model'
])
    .controller('ContactsCtrl', function($scope, contacts, $rootScope) {
        $rootScope.title = 'Контакти';
        $scope.info = contacts.getInfo();
    });