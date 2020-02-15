const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel } = require('../event-types');
const { rooms } = require('../locations');

const time = "2:00pm - 3:00pm";

module.exports = [
    {
        title: "Open to the Idea of Being Married",
        time,
        type: panel,
        room: rooms.wasatch,
        demographic: demographics.general,
        moderator: speakers.vaughn_armstrong,
        panelists: [
            speakers.bob_and_deb_stevens,
            speakers.liv_and_matthew_haynes,
            speakers.charles_and_julee_hamilton,
        ],
    },
    {
        title: "My Worth as a Man!!!",
        time,
        type: breakout,
        room: rooms.deer,
        demographic: demographics.ssa_men,
        speakers: [
            speakers.will_edgel,
            speakers.blake_smith,
            speakers.travis_steward,
        ],
    },
    {
        title: " Finding Belonging While Feeling You Don't Fit the Traditional Mold",
        time,
        type: breakout,
        room: rooms.brighton_alta,
        demographic: demographics.general,
        speakers: [
            speakers.dennis_schleicher,
        ],
    },
    {
        title: "Healthy Relationships: How to not mess it up and to fix it if you did",
        time,
        type: breakout,
        room: rooms.sundance,
        demographic: demographics.ssa_women,
        speakers: [
            speakers.kim_shores,
            speakers.sarah_tate,
        ],
    },
    {
        title: "Individual Faith Journeys and Building Zion",
        time,
        type: breakout,
        room: rooms.powder,
        demographic: demographics.trans,
        speakers: [
            speakers.brandon_jensen,
            speakers.nick_gregory,
            speakers.landon_phillips,
            speakers.katherine_hermann,
        ],
    },
    {
        title: "The Journey: A Story of Love and Acceptance",
        time,
        type: breakout,
        room: rooms.snowbird,
        demographic: demographics.family_friends,
        speakers: [
            speakers.russ_gaede,
        ],
    },
];
