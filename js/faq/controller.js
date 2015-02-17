angular.module('faq.controller', [
    'faq.model'
])
    .controller('FaqCtrl', function($scope, faq) {
        $scope.questions = faq.getQuestions();
        $scope.changeChosenNumber = function(el) {
            for ($scope.chosenNumber = 0; $scope.questions[$scope.chosenNumber].id !== el.id; $scope.chosenNumber++) {}

        };
    });