const {
    templeSessions: {
        bountiful,
        jordan,
    },
    qpr,
    firstTimers,
    openingSocial,
} = require('../events/other-events');

module.exports = {
    day: "Thursday",
    date: new Date('March 5 2020'),
    events: [
        bountiful,
        jordan,
        qpr,
        firstTimers,
        openingSocial,
    ],
};