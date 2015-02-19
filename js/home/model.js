angular.module('home.model', [
    'cheDream.api'
])
    .factory('dreams', function (api) {
        var dreams = [
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 1,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 0,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            },
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            }
        ];

        /*
         var dreams = {};
         api('/dreams.json?limit=8').then(function (data) {
            dreams = data.items;
         });*/

        dreams.forEach(function(el) {
            if (el.favorites_count > 1) {
                el.favorites_count_word = 'Підтримало';
            } else if (el.favorites_count == 1) {
                el.favorites_count_word = 'Підтримав';
            } else {
                el.favorites_count_word = '';
                el.favorites_count = '';
            }
        });

        //TODO test it
        /*
        angular.element( document.querySelector( window ) ).bind('scroll', bindScroll);
        function bindScroll() {
            if (window.innerHeight + document.body.scrollTop > document.body.offsetHeight - 120) {
                var newDreams = {},
                    apiSting = '/dreams.json?limit=' + (dreams.length + 4);
                api(apiSting).then(function (data) {
                    newDreams = data.items.splice(dreams.length, 4);
                });
                dreams.concat(newDreams);
            }
        }
        */

        return {
            getDreams: function () {
                return dreams;
            }
        };
});