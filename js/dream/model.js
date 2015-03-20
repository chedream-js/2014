angular.module('dream.model', [
    'cheDream.api'
])
    .factory('dream', function (api, $stateParams) {

        var dream = {};

        api('/dreams/' + $stateParams.slug + '.json', 'dream').then(function (data) {
            dream = data;
        });

        return {
            getDream: function () {
                return dream;
            }
        };

    });