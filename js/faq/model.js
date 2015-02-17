angular.module('faq.model', [
    'cheDream.api'
])
    .factory('faq', function (api) {
        var questions = [
            {
                "id": 54,
                "title": "eos",
                "question": "YOURS: I don't like them raw.' 'Well, be off, and that if you don't explain it as you say \"What a.",
                "answer": "Dormouse; '--well in.' This answer so confused poor Alice, 'it would be of very little use, as it went, 'One side of WHAT? The other guests had taken his watch out of the court,\" and I could let you.",
                "slug": "eos"
            },
            {
                "id": 55,
                "title": "voluptas",
                "question": "King. 'Nothing whatever,' said Alice. 'I wonder how many hours a day or two: wouldn't it be of any.",
                "answer": "The Queen!' and the March Hare. 'He denies it,' said Alice. 'Well, I hardly know--No more, thank ye; I'm better now--but I'm a deal faster than it does.' 'Which would NOT be an old woman--but.",
                "slug": "voluptas"
            },
            {
                "id": 56,
                "title": "sed",
                "question": "William's conduct at first was in March.' As she said to the table for it, while the rest of the.",
                "answer": "They all made of solid glass; there was no one else seemed inclined to say to itself, half to itself, half to Alice. 'What IS a long tail, certainly,' said Alice as she fell past it. 'Well!' thought.",
                "slug": "sed"
            },
            {
                "id": 57,
                "title": "rerum",
                "question": "In another moment that it was too small, but at the end of your flamingo. Shall I try the patience.",
                "answer": "So she began: 'O Mouse, do you want to see some meaning in it,' said the Caterpillar; and it said nothing. 'This here young lady,' said the Gryphon. 'We can do without lobsters, you know. Come on!'.",
                "slug": "rerum"
            }
        ];
        /*
        var questions = {};
        api('/faqs.json').then(function (data) {
            questions = data.items;//or just =data
        });*/

        return {
            getQuestions: function () {
                return questions;
            }
        };
    });