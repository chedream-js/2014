var chedreamApp = angular.module('cheDream.app', [
    'routing',
    'ui.router'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
