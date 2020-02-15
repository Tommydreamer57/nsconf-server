const { locations, rooms } = require('./locations');
const eventTypes = require('./event-types');

module.exports = {
    registration: {
        name: "Registration",
        time: "7:00am - 9:00am",
        type: eventTypes.other,
        location: locations.sheraton,
        description: "",
    },
    lunch: {
        friday: {
            name: "Lunch",
            time: "12:45pm -2:00pm",
            type: eventTypes.meal,
            room: rooms.ballroom,
            description: "",
        },
        saturday: {
            name: "Lunch",
            time: "12:15pm - 1:30pm",
            type: eventTypes.meal,
            room: rooms.ballroom,
            description: "",
        },
    },
};