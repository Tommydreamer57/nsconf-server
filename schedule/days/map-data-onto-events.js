const { breakout_group, breakout_session } = require('../events/event-types');

module.exports = data => event => ({
    ...data,
    ...event,
    ...event.type === breakout_group && {
        sessions: event.sessions.map(session => ({
            type: breakout_session,
            ...data,
            ...session,
        })),
    },
});
