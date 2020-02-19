const { sundaySharing } = require('../events/other-events');
const mapDataOntoEvents = require('./map-data-onto-events');

const day = "Sunday";
const date = 'March 8, 2020';

module.exports = {
    day,
    date,
    events: [
        sundaySharing,
    ].map(mapDataOntoEvents({ day, date })),
};