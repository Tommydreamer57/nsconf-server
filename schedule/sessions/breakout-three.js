const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('../event-types');
const { rooms } = require('../locations');

const time = "3:15pm - 4:15pm";

module.exports = [
    {
        title: "Staying Strong while going through Church Discipline",
        time,
        type: panel,
        room: rooms.wasatch,
        demographic: demographics.general,
        moderator: speakers.kurt_francom,
        panelists: [
            speakers.bryce_johnson,
            speakers.rick_hall,
            speakers.sita_kinikini,
            speakers.karen_dufresne,
            speakers.will_edgel,
        ],
    },
    {
        title: "Alone, But Not Lonely",
        time,
        type: panel,
        room: rooms.deer,
        demographic: demographics.general,
        moderator: speakers.alex_lindstrom,
        panelists: [
            speakers.bradley_stoker,
            speakers.quinn_kelly,
            speakers.lucas_and_wyrlon_jones,
        ],
    },
    {
        title: "Do I Have to Choose Between My Child and My Faith?",
        time,
        type: breakout,
        room: rooms.brighton_alta,
        demographic: demographics.family_friends,
        speakers: [
            speakers.monica_phillips,
            speakers.wendy_eldredge,
        ],
    },
    {
        title: "Spouses Facilitated Discussion: Closed Door Session",
        time,
        type: closed,
        room: rooms.sundance,
        demographic: demographics.spouses,
        speakers: [
            speakers.maryann_broberg
        ],
    },
    {
        title: "Married Men Facilitated Discussion: Closed Door Session",
        time,
        type: closed,
        room: rooms.powder,
        demographic: demographics.ssa_men,
        facilitator: speakers.jeff_bennion,
    },
    {
        title: "It is Christ that Makes Us Whole",
        time,
        type: breakout,
        room: rooms.snowbird,
        demographic: demographics.general,
        speakers: [
            speakers.michael_goodman,
        ],
    },
    {
        title: "Trans Spouses Facilitated Discussion: Closed Door Session",
        time,
        type: closed,
        room: rooms.cottonwood,
        demographic: demographics.spouses,
        facilitator: speakers.shannon_rants,
    },
];
