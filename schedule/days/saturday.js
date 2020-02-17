const keynotes = require('../events/keynotes');
const breakouts = require('../events/breakouts');
const other = require('../events/other-events');

module.exports = {
    day: "Saturday",
    date: 'March 7, 2020',
    events: [
        other.registration,
        keynotes.three,
        breakouts.four,
        other.lunch.saturday,
        breakouts.five,
        breakouts.six,
        keynotes.four,
    ],
};