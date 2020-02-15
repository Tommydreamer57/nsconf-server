const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel } = require('../event-types');
const { rooms } = require('../locations');

const time = "11:00am - 12:30pm";

module.exports = [
    {
        title: "The Power of Stillness",
        time,
        type: breakout,
        room: rooms.wasatch,
        demographic: demographics.general,
        speakers: [
            speakers.ty_mansfield,
            speakers.jacob_hess,
            speakers.carrie_skarda,
        ],
    },
    {
        title: "A house divided: Navigating family dynamics",
        time,
        type: panel,
        room: rooms.deer,
        demographic: demographics.family_friends,
        moderator: speakers.debby_jackson,
        panelists: [
            speakers.dale_larsen,
            speakers.rebecca_silva,
            speakers.janae_monsen,
            speakers.patrice_fairbanks,
        ],
    },
    {
        title: "There IS a Place For Us",
        time,
        type: panel,
        room: rooms.brighton_alta,
        demographic: demographics.trans,
        moderator: speakers.jeff_case,
        panelists: [
            speakers.victoria_adam,
            speakers.lyndsey_andreasky,
            speakers.chelsea_hanson,
            speakers.sean_crandall,
        ],
    },
    {
        title: "Cycle of Connection and Disconnection in Marriage (Healthy patterns relating to self, spouse, and God.)",
        time,
        type: breakout,
        room: rooms.powder,
        demographic: demographics.couples,
        speaker: [
            speakers.shannon_rants,
        ],
    },
    {
        title: "Using Revelation to Nurture a Personal Relationship with God",
        time,
        type: breakout,
        room: rooms.snowbird,
        demographic: demographics.general,
        speaker: [
            speakers.becky_edwards,
        ],
    },
];
