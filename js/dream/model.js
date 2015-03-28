angular.module('dream.model', [
    'cheDream.api'
])
    .factory('dream', function (api, $stateParams) {

        var dream = {};

        api('/dreams/' + $stateParams.slug + '.json', 'dream').then(function (data) {
            dream = data;
            dream = progressOutput(dream);
        });

        return {
            getDream: function () {
                return dream;
            }
        };

    });