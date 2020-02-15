const keynotes = require('../sessions/keynotes')
const breakouts = require('../sessions/breakouts');
const other = require('../other-events');

module.exports = [
    other.registration,
    keynotes.three,
    breakouts.four,
    other.lunch.saturday,
    breakouts.five,
    breakouts.six,
    keynotes.four,
];