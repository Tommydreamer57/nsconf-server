const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('../event-types');
const { rooms } = require('../locations');

const time = "3:15pm - 4:15pm";

module.exports = [
    {
        title: "Ministering to Those Who Question",
        time,
        type: breakout,
        room: rooms.wasatch,
        demographic: demographics.leaders,
        speakers: [
            speakers.david_ostler,
        ],
    },
    {
        title: "Navigating the Complex Conversations in Marriage",
        time,
        type: panel,
        room: rooms.deer,
        demographic: demographics.couples,
        moderator: speakers.jeff_case,
        panelists: [
            speakers.ryan_and_kerrie_warnick,
            speakers.erick_and_kathi_hacking,
            speakers.ricardo_and_elizabeth_rosas,
        ],
    },
    {
        title: "Toxicity and Community",
        time,
        type: panel,
        room: rooms.brighton_alta,
        demographic: demographics.trans,
        moderator: speakers.lucas_jones,
        panelists: [
            speakers.ann_pack,
            speakers.kris_irvin,
            speakers.ky_merkley,
            speakers.allison_pryor,
        ],
    },
    {
        title: "SSA Women Facilitated Discussion: Closed Door Session",
        time,
        type: closed,
        room: rooms.sundance,
        demographic: demographics.ssa_women,
        facilitator: speakers.shannon_rants,
    },
    {
        title: "Rise to the Challenge: A New Ministry",
        time,
        type: breakout,
        room: rooms.powder,
        demographic: demographics.family_friends,
        speakers: [
            speakers.lisa_arnold,
        ],
    },
    {
        title: "Experience Yourself Giving it to Christ",
        time,
        type: breakout,
        room: rooms.snowbird,
        demographic: demographics.general,
        speakers: [
            speakers.tanya_bennion,
        ],
    },
];







