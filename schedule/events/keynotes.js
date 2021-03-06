const { keynote } = require('./event-types');
const { rooms: { ballroom } } = require('../locations');
const speakers = require('../speakers');

module.exports = {
    one: {
        title: "Keynote 1",
        time: "9:00am - 10:45am",
        type: keynote,
        room: ballroom,
        speakers: [
            speakers.gentri,
        ],
    },
    two: {
        title: "Keynote 2",
        time: "4:30pm - 5:45pm",
        type: keynote,
        room: ballroom,
        speakers: [
            speakers.emily_freeman,
            speakers.david_butler,
        ],
    },
    three: {
        title: "Keynote 3",
        time: "9:00am - 10:15am",
        type: keynote,
        room: ballroom,
        speakers: [
            speakers.scott_and_becky_mackintosh,
        ],
    },
    four: {
        title: "Keynote 4",
        time: "4:00pm - 5:30pm",
        type: keynote,
        room: ballroom,
        speakers: [
            speakers.becket_cook,
        ],
    },
};