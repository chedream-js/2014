chedreamApp.directive('uiCarousel', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: function($scope, api, $state) {
            api('/dreams?limit=4&status=compleated&sort_by=status_update&sort_order=DESC', 'carousel').then(function (data) {
                $scope.doneDreams = data.items;
            });

            $scope.doneDreams = [//fake
                {
                    slug: 'number1',
                    title: 'first',
                    url: 'images/carosel-item2.jpg',
                    completed_description: 'qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                },
                {
                    slug: 'number2',
                    title: 'second',
                    url: 'images/dream-logo.jpg',
                    completed_description: 'zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                },
                {
                    slug: 'number3',
                    title: 'third',
                    url: 'images/carosel-item1.jpg',
                    completed_description: 'asd asd asd asd asd asd asd asd asd asd asd asd qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                },
                {
                    slug: 'number4',
                    title: 'fourth',
                    url: 'images/img.png',
                    completed_description: 'fgh fgh fgh fgh fgh fgh fgh fgh fgh fgh fgh fh fgh fgh qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                }
            ];

            $scope.changeChosen = function(index, currentSlug) {
                if ($scope.chosen == index) {
                    $state.go( 'dream', { slug: currentSlug } );
                } else {
                    $scope.chosen = index;
                }
            };

        },
        templateUrl: 'js/ui-directives/view/carousel.html'
    };
});