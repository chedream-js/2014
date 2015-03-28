angular.module('home.model', [
    'cheDream.api'
])
    .factory('dreams', function (api) {
         var isMoreDreams = true;

         var dreams = [];
         api('/dreams.json?count=8', 'dreams').then(function (data) {
            dreams = data.dreams;
            dreams.forEach(function(dream) {
                dream = progressOutput(dream);
            });
         });

        angular.element( window ).on('scroll', bindScroll);
        function bindScroll() {
            if ((window.innerHeight + window.scrollY) >= document.querySelector('.wrapper').offsetHeight - 100) {
                api('/dreams.json?count=' + (dreams.length + 4), 'New Dreams').then(function (data) {
                    dreams = dreams.concat(data.dreams.splice(dreams.length, 4));

                    dreams.forEach(function(dream) {
                        dream = progressOutput(dream);
                    });
                    if (dreams.length % 4 !== 0) {
                        isMoreDreams = false;
                        angular.element( window ).off('scroll', bindScroll);
                    }
                });
            }
        }

        return {
            getDreams: function() {
                return dreams;
            },
            canGetMoreDreams: function() {
                return isMoreDreams;
            }
        };
});

function progressOutput(dream) {
    var needWords = [
            'dream_financial_resources',
            'dream_equipment_resources',
            'dream_work_resources'
        ],
        haveWords = [
            'dream_financial_contributions',
            'dream_equipment_contributions',
            'dream_work_contributions'
        ],
        putWords = [
            'financialPercent',
            'equipmentPercent',
            'workPercent'
        ],
        need,
        have,
        i;
    for (i = 0; i < putWords.length; i++) {
        need = 0;
        have = 0;
        dream[needWords[i]].forEach(function (el) {
            need += el.quantity;
        });
        dream[haveWords[i]].forEach(function (el) {
            have += el.quantity;
        });
        dream[putWords[i]] = Math.round(have / need * 100);
        if (dream[putWords[i]] > 100) {
            dream[putWords[i]] = 100;
        }
        if (isNaN(dream[putWords[i]])) {
            dream[putWords[i]] = 0;
        }
    }
    return dream;
}