const keynotes = require('../events/keynotes');
const breakouts = require('../events/breakouts');
const other = require('../events/other-events');

module.exports = {
    day: "Friday",
    date: 'March 6, 2020',
    events: [
        other.registration,
        keynotes.one,
        breakouts.one,
        other.lunch.friday,
        breakouts.two,
        breakouts.three,
        keynotes.two,
    ],
};