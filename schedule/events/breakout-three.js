const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('./event-types');
const { rooms } = require('../locations');


module.exports = {
    title: "Breakout 3",
    time: "3:15pm - 4:15pm",
    type: breakout,
    selectedSession: null,
    sessions: [
        {
            title: "Staying Strong while going through Church Discipline",
            room: rooms.wasatch,
            demographic: demographics.general,
            moderator: speakers.kurt_francom,
            panelists: [
                speakers.bryce_johnson,
                speakers.rick_hall,
                speakers.sita_kinikini,
                speakers.karen_dufresne,
                speakers.will_edgel,
            ],
            description: "One of the most challenging times a Latter-day Saint may face in their religious journey may be when they must navigate and endure the church discipline process.  In this panel session, we will hear from those who have been able to faithfully work through the repentance process.  They will discuss the many aspects of what helped, what didn't, and how leaders supported them through the process.",
        },
        {
            title: "Alone, But Not Lonely",
            room: rooms.deer,
            demographic: demographics.general,
            moderator: speakers.alex_lindstrom,
            panelists: [
                speakers.bradley_stoker,
                speakers.quinn_kelly,
                speakers.lucas_and_wyrlon_jones,
            ],
            description: "Anyone can experience loneliness, it’s not just something single people experience. Loneliness can appear in a wide variety of contexts, whether it’s standing alone in your beliefs, experiences, choices, or simply physically alone. In this panel, we’ll share examples of when we have felt alone and how we have coped in healthy ways with those feelings. We will also share about our efforts to connect with God and with others and in creating a community of support.",
        },
        {
            title: "Do I Have to Choose Between My Child and My Faith?",
            room: rooms.brighton_alta,
            demographic: demographics.family_friends,
            speakers: [
                speakers.monica_phillips,
                speakers.wendy_eldredge,
            ],
            description: "In 2013 Wendy discovered her son experiences same sex attraction and in 2016 Monica learned that her son experiences gender dysphoria. In this session you will meet two moms who have experienced the gammat of emotions as they maneuvered the process of letting go of things they thought they understood and opening up to a broader and deeper way of loving their child, their God, and their faith.",
        },
        {
            title: "Spouses Facilitated Discussion: Closed Door Session",
            room: rooms.sundance,
            demographic: demographics.spouses,
            speakers: [
                speakers.maryann_broberg
            ],
            description: "What challenges have you faced as the spouse of a man who experiences same sex attraction? How are you getting your needs met? Join us for an open and honest conversation about the issues unique to women married to men with SSA.",
        },
        {
            title: "Married Men Facilitated Discussion: Closed Door Session",
            room: rooms.powder,
            demographic: demographics.ssa_men,
            facilitator: speakers.jeff_bennion,
            description: "This will be facilitated by Jeff Bennion as a safe place for married men to ask questions, listen, and hold space for each other who are navigating a mixed-orientation marriage.",
        },
        {
            title: "It is Christ that Makes Us Whole",
            room: rooms.snowbird,
            demographic: demographics.general,
            speakers: [
                speakers.michael_goodman,
            ],
            description: "Are my options really only to endure patiently (and painfully) within the gospel or to leave it behind and live my life joyfully according to my sexual orientation or gender identity? In this session we will discuss this question and explore how we can live rich, full, and relational lives by staying covenant-connected to our Savior. It truly is Christ that makes us whole.",
        },
        {
            title: "Trans Spouses Facilitated Discussion: Closed Door Session",
            room: rooms.cottonwood,
            demographic: demographics.spouses,
            facilitator: speakers.shannon_rants,
            description: "This will be facilitated by Shannon Rants as a safe place to ask questions, listen, and hold space for each other who are navigating transgender relationships.",
        },
    ],
};
