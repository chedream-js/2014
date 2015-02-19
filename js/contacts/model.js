angular.module('contacts.model', [])
    .factory('contacts', function () {
        var info = {
            number: '(0472) 33-22-11',
            life: '(093) 333-33-33',
            mtc: '(099) 484-33-33',
            kyivstar: '(097) 841-33-33',
            skype: 'neuhatska.svitlana',
            icq: '999-888-777'
        };

        return {
            getInfo: function () {
                return info;
            }
        };
    });