const keynotes = require('../events/keynotes');
const breakouts = require('../events/breakouts');
const other = require('../events/other-events');
const mapDataOntoEvent = require('./map-data-onto-events');

const day = "Saturday";
const date = 'March 7, 2020';

module.exports = {
    day,
    date,
    events: [
        other.registration,
        keynotes.three,
        breakouts.four,
        other.lunch.saturday,
        breakouts.five,
        breakouts.six,
        keynotes.four,
    ].map(mapDataOntoEvent({ day, date })),
};