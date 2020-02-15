const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('../event-types');
const { rooms } = require('../locations');

const time = "3:15pm - 4:15pm";

module.exports = [
    {
        title: "A Discussion on Healthy Male Friendships",
        time,
        type: panel,
        room: rooms.wasatch,
        demographic: demographics.ssa_men,
        moderator: speakers.brent_ebmeyer,
        panelists: [
            speakers.jarry_lozano,
            speakers.chad_hill,
            speakers.greg_reichmann,
            speakers.justin_mangum,
            speakers.pret_dahlgren,
            speakers.troy_dahlgren,
        ],
    },
    {
        title: "Joyfully Navigating Faith & Orientation",
        time,
        type: panel,
        room: rooms.deer,
        demographic: demographics.general,
        speakers: [
            speakers.charlie_bird,
        ],
    },
    {
        title: '"Let it Go!" - The Healing Power of True Surrender',
        time,
        type: breakout,
        room: rooms.brighton_alta,
        demographic: demographics.general,
        speakers: [
            speakers.dan_gray
        ],
    },
    {
        title: '"Broken Together": Living and Thriving in a Mixed-orientation Marriage',
        time,
        type: breakout,
        room: rooms.sundance,
        demographic: demographics.ssa_women,
        speakers: [
            speakers.tami_and_ben_wright,
        ],
    },
    {
        title: "How I Fit in God's Plan",
        time,
        type: breakout,
        room: rooms.powder,
        demographic: demographics.general,
        speakers: [
            speakers.ky_merkley,
            speakers.brent_schindler,
            speakers.jenn_curtis,
        ],
    },
    {
        title: "Survival Tips for Family Mental Health and Happiness",
        time,
        type: breakout,
        room: rooms.snowbird,
        demographic: demographics.family_friends,
        speakers: [
            speakers.lisa_hansen,
        ],
    },
];






