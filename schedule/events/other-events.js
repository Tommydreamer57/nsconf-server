const {
    locations: {
        olympus,
        sheraton,
        bountiful,
        jordan,
    },
    rooms: {
        ballroom,
        arches,
        deer,
        zion,
    },
} = require('../locations');
const {
    social,
    session,
} = require('./event-types');

module.exports = {
    templeSessions: {
        bountiful: {
            title: "Temple Session - Bountiful",
            time: "12:30pm",
            type: social,
            location: bountiful,
            note: "Meet in chapel at 12:30 for the 1:00 session.",
            description: "Help start off the conference with endowment and baptisms at a few different temples.",
        },
        jordan: {
            title: "Temple Session - Jordan River",
            time: "12:30pm",
            type: social,
            location: jordan,
            note: "Meet in chapel at 12:30 for the 1:00 session.",
            description: "Help start off the conference with endowment and baptisms at a few different temples.",
        },
    },
    qpr: {
        title: "QPR Suicide Prevention Training",
        time: "3:00pm - 5:00pm",
        type: session,
        location: sheraton,
        room: deer,
        description: 'Suicide awareness, prevention, and training have saved many lives. This in-depth hands-on session is twofold; first, Jeff Case will focus on the key identifiers associated with individuals contemplating suicide along with the need for training people in suicide prevention. Second, Don and Deborah Coe will provide attendees with the opportunity to receive training in the QPR (Question, Persuade, and Refer) model. People trained in the QPR model learn how to recognize the warning signs of a suicide crisis and offer "buddy aid."',
    },
    firstTimers: {
        title: "First-Timers' Session",
        time: "5:00pm - 6:00pm",
        type: social,
        location: olympus,
        description: "",
    },
    openingSocial: {
        title: "Opening Social",
        time: "6:00pm - 8:00pm",
        type: social,
        location: olympus,
        description: "Join us the night before the conference to mingle with new and old friends, complete your registration, or practice with the conference choir.",
    },
    registration: {
        title: "Registration",
        time: "8:00am - 9:00am",
        type: social,
        location: sheraton,
        description: "",
    },
    lunch: {
        friday: {
            title: "Lunch",
            time: "12:45pm -2:00pm",
            type: social,
            room: ballroom,
            description: "",
        },
        saturday: {
            title: "Lunch",
            time: "12:15pm - 1:30pm",
            type: social,
            room: ballroom,
            description: "",
        },
    },
    fridayFun: {
        title: "Friday Fun",
        time: "6:00pm - 7:30pm",
        type: social,
        room: zion,
        description: "Stay after the Friday afternoon keynote to enjoy live music, games, and appetizers, and connect with friends you've made at the conference. (There will be a space for millennials to gather afterward, as well as the youth talent show)",
    },
    millennialSocial: {
        title: "Young Adult Social (18-30)",
        time: "7:00pm - 10:00pm",
        type: social,
        description: "",
    },
    sundaySharing: {
        title: "Experience Sharing Session",
        time: "9:00am - 11:00am",
        type: social,
        room: arches,
        description: "",
    },
};