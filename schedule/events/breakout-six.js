const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('./event-types');
const { rooms } = require('../locations');

const time = "3:15pm - 4:15pm";

module.exports = {
    name: "Breakout 6",
    time,
    type: breakout,
    selectedSession: null,
    sessions: [
        {
            title: "Ministering to Those Who Question",
            time,
            type: breakout,
            room: rooms.wasatch,
            demographic: demographics.leaders,
            speakers: [
                speakers.david_ostler,
            ],
            description: "We all have family members or friends who no longer believe or want to participate with us at church. In this session, using research from his book “Bridges” Ostler discusses the real reasons people disaffiliate (hint: it’s not them wanting to sin, being offended or lazy) and how to show them love and understanding. When we truly listen and understand, we are better able to comfort them and mourn with them.",
        },
        {
            title: "Navigating the Complex Conversations in Marriage",
            time,
            type: panel,
            room: rooms.deer,
            demographic: demographics.couples,
            moderator: speakers.jeff_case,
            panelists: [
                speakers.ryan_and_kerrie_warnick,
                speakers.erick_and_kathi_hacking,
                speakers.ricardo_and_elizabeth_rosas,
            ],
            description: "Comminication is key to a lasting marriage.  Add the complexities that come with an LGBT relationship, and it is even more important.  During this panel discussion we will hear from those who have made it work despite these complexities.  We will learn how to communicate our needs in a way that brings trust and connection in any marriage.",
        },
        {
            title: "Toxicity and Community",
            time,
            type: panel,
            room: rooms.brighton_alta,
            demographic: demographics.trans,
            moderator: speakers.lucas_jones,
            panelists: [
                speakers.ann_pack,
                speakers.kris_irvin,
                speakers.ky_merkley,
                speakers.allison_pryor,
            ],
            description: "None are exempt from the enduring strength made available through adherence to eternal gospel principles but finding community and eliminating toxicity in that journey can be difficult. This panel will discuss how others have been able to hold onto community regardless of their transitionary state. Learn from others how to bless and find community through your life's journey and eliminate toxicity.",
        },
        {
            title: "SSA Women Facilitated Discussion: Closed Door Session",
            time,
            type: closed,
            room: rooms.sundance,
            demographic: demographics.ssa_women,
            facilitator: speakers.shannon_rants,
            description: "This will be facilitated by Shannon Rants as a safe place to ask questions, listen, and hold space for each other who are navigating same-sex attractions.",
        },
        {
            title: "Rise to the Challenge: A New Ministry",
            time,
            type: breakout,
            room: rooms.powder,
            demographic: demographics.family_friends,
            speakers: [
                speakers.lisa_arnold,
            ],
            description: "Sometimes it’s hard for parents to see where they fit into their LGBTQ child’s life. What does the Lord require of us? In this session we will discuss how to hold true to our faith and rise to the challenge of our role as parents of our beloved LGBTQ children.",
        },
        {
            title: "Experience Yourself Giving it to Christ",
            time,
            type: breakout,
            room: rooms.snowbird,
            demographic: demographics.general,
            speakers: [
                speakers.tanya_bennion,
            ],
            description: "How do I surrender my burdens to my Savior? How do I rid myself of the pain or anger or sadness or resentment or bad thoughts I’m having? How do I know that Christ will be able to take this burden from me? And what should I ask to be filled with instead of these feelings I’m having? In this session, you will have the opportunity to experience yourself giving these things to Christ and feeling His love for you.",
        },
    ],
};
