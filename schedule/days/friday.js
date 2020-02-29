const keynotes = require('../events/keynotes');
const breakouts = require('../events/breakouts');
const other = require('../events/other-events');
const mapDataOntoEvent = require('./map-data-onto-events');

const day = 'Friday';
const date = 'March 6, 2020';

module.exports = {
    day,
    date,
    events: [
        other.registration,
        keynotes.one,
        breakouts.one,
        other.lunch.friday,
        breakouts.two,
        breakouts.three,
        keynotes.two,
        other.dessertSocial,
        other.millennialSocial,
    ].map(mapDataOntoEvent({ day, date })),
};