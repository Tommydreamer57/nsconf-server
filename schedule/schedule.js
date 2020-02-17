const thursday = require('./days/thursday');
const friday = require('./days/friday');
const saturday = require('./days/saturday');
const sunday = require('./days/sunday');
const { breakout_group, keynote, social } = require('./events/event-types');

const replaceSpaces = (str = '') => str.replace(/\s+/g, '+');

const addFeedbackURLToSession = session => ({
    ...session,
    feedbackURL: `https://docs.google.com/forms/d/e/1FAIpQLScQq-_3fse3EkhhFJXy5WIlM4k9glBXR6ZnjajEmLgoclMYRA/viewform?usp=pp_url&entry.1824840307=${
        replaceSpaces(session.title)
        }&entry.68503817=${
        replaceSpaces([
            ...session.speakers || [],
            ...session.moderator ? [session.moderator] : [],
            ...session.panelists || []
        ].map(({ name }) => name).join(', '))
        }`,
});

const addFeedbackURLToSocial = social => ({
    ...social,
    feedbackURL: `https://docs.google.com/forms/d/e/1FAIpQLSe0qZaEL7pDfs4C2uSKsmSCeHNaznCrb_DGjUi6DWJMXAPIKg/viewform?usp=pp_url&entry.1565515700=${
        replaceSpaces(social.title)
        }&entry.98669354=${
        replaceSpaces(social.location || social.room)
        }`,
});

module.exports = {
    days: [
        thursday,
        friday,
        saturday,
        sunday,
    ].map(day => ({
        ...day,
        events: day.events.map(event => ({
            ...event,
            ...event.type === breakout_group ?
                {
                    sessions: event.sessions.map(addFeedbackURLToSession)
                }
                :
                event.type === keynote ?
                    addFeedbackURLToSession(event)
                    :
                    event.type === social ?
                        addFeedbackURLToSocial(event)
                        :
                        null,
        })),
    })),
};
