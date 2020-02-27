const { locations, rooms } = require('../locations');
const eventTypes = require('./event-types');

module.exports = {
    registration: {
        title: "Registration",
        time: "7:00am - 9:00am",
        type: eventTypes.social,
        location: locations.sheraton,
        description: "",
    },
    lunch: {
        friday: {
            title: "Lunch",
            time: "12:45pm -2:00pm",
            type: eventTypes.social,
            room: rooms.ballroom,
            description: "",
        },
        saturday: {
            title: "Lunch",
            time: "12:15pm - 1:30pm",
            type: eventTypes.social,
            room: rooms.ballroom,
            description: "",
        },
    },
    sundaySharing: {
        title: "Experience Sharing Session",
        time: "9:00am - 11:00am",
        type: eventTypes.social,
        room: rooms.arches,
        description: "",
    },
    templeSessions: {
        bountiful: {
            title: "Temple Session - Bountiful",
            time: "12:30pm",
            type: eventTypes.social,
            location: locations.bountiful,
            note: "Meet in chapel at 12:30 for the 1:00 session.",
            description: "",
        },
        jordan: {
            title: "Temple Session - Jordan River",
            time: "12:30pm",
            type: eventTypes.social,
            location: locations.jordan,
            note: "Meet in chapel at 12:30 for the 1:00 session.",
            description: "",
        },
    },
    qpr: {
        title: "QPR Suicide Prevention Training",
        time: "3:00pm - 5:00pm",
        type: eventTypes.session,
        location: locations.sheraton,
        room: rooms.deer,
        description: 'Suicide awareness, prevention, and training have saved many lives. This in-depth hands-on session is twofold; first, Jeff Case will focus on the key identifiers associated with individuals contemplating suicide along with the need for training people in suicide prevention. Second, Don and Deborah Coe will provide attendees with the opportunity to receive training in the QPR (Question, Persuade, and Refer) model. People trained in the QPR model learn how to recognize the warning signs of a suicide crisis and offer "buddy aid."',
    },
    firstTimers: {
        title: "First-Timers' Session",
        time: "5:00pm - 6:00pm",
        type: eventTypes.social,
        location: locations.olympus,
        description: "",
    },
    openingSocial: {
        title: "Opening Social",
        time: "6:00pm - 8:00pm",
        type: eventTypes.social,
        location: locations.olympus,
        description: "",
    },
};