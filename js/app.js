angular.module('chedream.app', [
    'routing',
    'ui.router'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
