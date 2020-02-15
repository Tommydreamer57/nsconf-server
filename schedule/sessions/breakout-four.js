const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('../event-types');
const { rooms } = require('../locations');

const time = "10:30am - 12:00pm";

module.exports = [
    {
        title: "Bearing one another's burdens: How to lighten the burdens of your SSA / Trans members",
        time,
        type: panel,
        room: rooms.wasatch,
        demographic: demographics.leaders,
        moderator: speakers.richard_ostler,
        panelists: [
            speakers.brent_ebmeyer,
            speakers.joey_sheppard,
            speakers.myrna_moll,
            speakers.robert_burgraaf,
        ],
    },
    {
        title: "Keys to Flourishing as a Sexual Minority: What the Research Says",
        time,
        type: breakout,
        room: rooms.deer,
        demographic: demographics.general,
        speakers: [
            speakers.ty_mansfield,
            speakers.tyler_lefevor,
        ],
    },
    {
        title: "Healthy Attachment, Connection, and the Power of Relationships in Recovery from Unwanted Thinking and Addictive Behaviors",
        time,
        type: breakout,
        room: rooms.brighton_alta,
        demographic: demographics.ssa_men,
        speakers: [
            speakers.dan_gray,
        ],
    },
    {
        title: "Stepping into the Darkness in Faith, Honest Dialogue With Your Transgender Members",
        time,
        type: closed,
        room: rooms.sundance,
        demographic: demographics.leaders,
        speakers: [
            speakers.karen_c_and_michael_edwards,
        ],
    },
    {
        title: "How to Heal From Broken Female Connections",
        time,
        type: closed,
        room: rooms.powder,
        demographic: demographics.ssa_women,
        speakers: [
            speakers.shannon_rants,
        ],
    },
    {
        title: "Navigating Through Betrayal Trauma in Marriage",
        time,
        type: breakout,
        room: rooms.snowbird,
        demographic: demographics.couples,
        speakers: [
            speakers.sherie_christensen,
        ],
    },
];






