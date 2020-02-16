const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel, closed } = require('./event-types');
const { rooms } = require('../locations');

const time = "10:30am - 12:00pm";

module.exports = {
    name: "Breakout 4",
    time,
    selectedSession: null,
    sessions: [
        {
            title: "Bearing one another's burdens: How to lighten the burdens of your SSA / Trans members",
            time,
            type: panel,
            room: rooms.wasatch,
            demographic: demographics.leaders,
            moderator: speakers.richard_ostler,
            panelists: [
                speakers.brent_ebmeyer,
                speakers.joey_sheppard,
                speakers.myrna_moll,
                speakers.robert_burgraaf,
            ],
            description: "Richard Ostler, a former YSA Bishop who had LGBTQ members in his ward, will be discussing ministering principals to better meet the spiritual needs of LGBTQ Latter-day Saints, to help them feel a sense of belonging, and to better use their contributions to help us become the body of Christ that Paul spoke about in Corinthians.",
        },
        {
            title: "Keys to Flourishing as a Sexual Minority: What the Research Says",
            time,
            type: breakout,
            room: rooms.deer,
            demographic: demographics.general,
            speakers: [
                speakers.ty_mansfield,
                speakers.tyler_lefevor,
            ],
            description: "Sexuality/sexual identity and relationship choices can be personally sensitive and politically divisive. In order to be as comprehensive and inclusive as possible of different individuals’ and communities’ experiences, an ideologically diverse research team collaborated to explore pathways to flourishing within one of four major life options for sexual minorities: 1) single and celibate; 2) single and not celibate; 3) a heterosexual/mixed-orientation relationship; or 4) in a same-sex relationship. We will explore the findings of our research team and how they can provide insight and direction for those who navigating conflicts between sexuality and faith.",
        },
        {
            title: "Healthy Attachment, Connection, and the Power of Relationships in Recovery from Unwanted Thinking and Addictive Behaviors",
            time,
            type: breakout,
            room: rooms.brighton_alta,
            demographic: demographics.ssa_men,
            speakers: [
                speakers.dan_gray,
            ],
            description: "This session will focus on spiritual, philosophical and research-based perspectives regarding the power of relationships and connectedness in healing from unwanted, lustful thinking patterns and addictive behaviors. This will include a review of practical applications of attachment-based interventions. The importance of the Body/Spirit and Temple Connection will be discussed as it relates to the way we view ourselves and the way we view others.",
        },
        {
            title: "Stepping into the Darkness in Faith, Honest Dialogue With Your Transgender Members",
            time,
            type: closed,
            room: rooms.sundance,
            demographic: demographics.leaders,
            speakers: [
                speakers.karen_c,
                speakers.michael_edwards,
            ],
            description: "",
        },
        {
            title: "How to Heal From Broken Female Connections",
            time,
            type: closed,
            room: rooms.powder,
            demographic: demographics.ssa_women,
            speakers: [
                speakers.shannon_rants,
            ],
            description: "Tired of always giving? Tired of being lonely? Tired of being hurt? We'll explore how to move through the pain that we have experienced with other women and how to take steps towards healing within, with others, and with God.",
        },
        {
            title: "Navigating Through Betrayal Trauma in Marriage",
            time,
            type: breakout,
            room: rooms.snowbird,
            demographic: demographics.couples,
            speakers: [
                speakers.sherie_christensen,
            ],
            description: 'This session will address questions such as "How could God let this happen?" "How do I heal and have emotional safety while my partner continues to struggle?" "What is the difference between forgiveness and trust?" and "Is it possible to feel peace in this much pain?" It will combine therapeutic processes with doctrinal foundations to provide hope, healing, and support to those experiencing betrayal trauma.',
        },
    ],
};