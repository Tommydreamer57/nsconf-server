const mapDataOntoEvents = require('./map-data-onto-events');
const {
    templeSessions: {
        bountiful,
        jordan,
    },
    qpr,
    firstTimers,
    openingSocial,
} = require('../events/other-events');

const day = "Thursday";
const date = 'March 5 2020';

module.exports = {
    day,
    date,
    events: [
        bountiful,
        jordan,
        qpr,
        firstTimers,
        openingSocial,
    ].map(mapDataOntoEvents({ day, date })),
};