const thursday = require('./days/thursday');
const friday = require('./days/friday');
const saturday = require('./days/saturday');
const sunday = require('./days/sunday');

module.exports = {
    updatedAt: Date.now(),
    days: [
        thursday,
        friday,
        saturday,
        sunday,
    ],
};
