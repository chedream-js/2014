chedreamApp.directive('uiCarousel', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: function($scope, $interval) {
            //fake data
            $scope.doneDreams = [
                {
                    "id": 54,
                    "title": "sunt",
                    "url": "images/carosel-item2.jpg",
                    "completed_description": "Alice ventured to say. 'What is his sorrow?' she asked the Gryphon, and, taking Alice by the pope, was soon submitted to by the way, was the first day,' said the Dormouse. 'Fourteenth of March, I."
                },
                {
                    "id": 55,
                    "title": "aperiam",
                    "url": "images/carosel-item1.jpg",
                    "completed_description": "'What is his sorrow?' she asked the Gryphon, half to itself, half to herself, 'if one only knew the right way to fly up into the air, mixed up with the edge of the jury."
                },
                {
                    "id": 56,
                    "title": "tenetur",
                    "url": "images/carosel-item1.jpg",
                    "completed_description": "Queen! The Queen!' and the Hatter with a teacup in one hand, and Alice was too slippery; and when she went round the table, but there was nothing so VERY much out of the jury had a head could be NO."
                },
                {
                    "id": 57,
                    "title": "sunt",
                    "url": "images/carosel-item2.jpg",
                    "completed_description": "Rabbit say, 'A barrowful of WHAT?' thought Alice; 'but a grin without a porpoise.' 'Wouldn't it really?' said Alice to herself, (not in a natural way again. 'I wonder what they WILL do next! If they."
                }
            ];
            /*
            api('/dreams?limit=4&status=compleated&sort_by=status_update&sort_order=DESC').then(function (data) {
                $scope.doneDreams = data.items;//new special url
            });*/

            $scope.changeChosen = function(el) {
                for ($scope.chosen = 0; $scope.doneDreams[$scope.chosen].id !== el.id; $scope.chosen++) {}

            };

            var stop; //variable for interval function
            $scope.sliding = function() {
                stop = $interval(function() {
                    $scope.chosen++;
                    if ($scope.chosen > 3) {
                        $scope.chosen = 0;
                    }
                }, 2000); //TODO change time to 5000ms
            };

            $scope.resetSliding = function() {
                $interval.cancel(stop);
                $scope.sliding();
            };

            angular.element( document.querySelector( '#carousel' ) ).on('$destroy', function() {
                $interval.cancel(stop);
            });

        },
        templateUrl: 'templates/carousel.html'
    };
});