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
        description: 'Suicide awareness, prevention, and training have saved many lives. This in-depth hands-on session is twofold; first, Jeff Case will focus on the key identifiers associated with individuals contemplating suicide along with the need for training people in suicide prevention. Second, Don and Deborah Coe will provide attendees with the opportunity to receive training in the QPR (Question, Persuade, and Refer) model. People trained in the QPR model learn how to recognize the warning signs of a suicide crisis and offer "buddy aid."',
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