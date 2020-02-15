const { locations } = require('../locations');
const eventTypes = require('../event-types');

module.exports = [
    {
        name: "Temple Session - Bountiful",
        time: "1:00pm (meet in chapel at 12:30pm)",
        type: eventTypes.social,
        location: locations.bountiful,
        description: "",
    },
    {
        name: "Temple Session - Jordan River",
        time: "1:00pm (meet in chapel at 12:30pm)",
        type: eventTypes.social,
        location: locations.jordan,
        description: "",
    },
    {
        name: "QPR Suicide Prevention Training",
        time: "3:00pm - 5:00pm",
        type: eventTypes.other,
        location: locations.olympus,
        description: "",
    },
    {
        name: "First-Timers' Session",
        time: "5:00pm - 6:00pm",
        type: eventTypes.social,
        location: locations.olympus,
        description: "",
    },
    {
        name: "Opening Social",
        time: "6:00pm - 8:00pm",
        type: eventTypes.social,
        location: locations.olympus,
        description: "",
    },
];