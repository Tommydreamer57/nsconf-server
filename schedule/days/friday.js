const keynotes = require('../sessions/keynotes');
const breakouts = require('../sessions/breakouts');
const other = require('../other-events');

module.exports = [
    other.registration,
    keynotes.one,
    breakouts.one,
    other.lunch.friday,
    breakouts.two,
    breakouts.three,
    keynotes.two,
];