angular.module('cheDream.api', [])

    .constant('server', 'http://api.chedream.org')

    .factory('api', function(server, $http) {
        return function(url) {
            return $http.get(server + url).then(function(result) {
                return result.data || [];
            }, function(err) {
                console.log('Error:', err);
            });
        };
    });