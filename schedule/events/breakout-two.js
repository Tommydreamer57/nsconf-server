const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout_group, panel } = require('./event-types');
const { rooms } = require('../locations');


module.exports = {
    title: "Breakout 2",
    time: "2:00pm - 3:00pm",
    type: breakout_group,
    selectedSession: null,
    sessions: [
        {
            title: "Open to the Idea of Being Married",
            room: rooms.wasatch,
            demographic: demographics.general,
            moderator: speakers.vaughn_armstrong,
            panelists: [
                speakers.bob_and_debbie_stevens,
                speakers.liv_and_matthew_haynes,
                speakers.charles_and_julee_hamilton,
            ],
            description: 'The "M" word is a pretty big deal. How do I even know if it’s for me? What do I need to know for it to work? Is it worth it? How can I develop the faith, hope, or love necessary to succeed in this important relationship? Bring your heartfelt questions and prayers, learn from couples who have wondered the same, and who are actively seeking answers and applying those insights into their lives.',
        },
        {
            title: "My Worth as a Man!!!",
            room: rooms.deer,
            demographic: demographics.ssa_men,
            speakers: [
                speakers.will_edgel,
                speakers.blake_smith,
                speakers.travis_steward,
            ],
            description: "The transformation to worthy manhood can be a challenging road.  Our Heavenly Father wants to guide us through the process of overcoming a brokenness in one’s own manhood to a full embrace of the man He wants us to become, and to honor His other sons around us.  Listen to the journeys of three individuals as they have found worth in their lives.",
        },
        {
            title: "Finding Belonging While Feeling You Don't Fit the Traditional Mold",
            room: rooms.brighton_alta,
            demographic: demographics.general,
            speakers: [
                speakers.dennis_schleicher,
            ],
            description: "Dennis will take you on a journey of self-discovery and of being your true self, No matter what others think. With his passion and contagious personality you won’t deny a sense of belonging, feeling loved. We are all unique children of God on our own individualized journeys. Don’t ever let another person’s opinion of you define your self-worth. What anyone else thinks is irrelevant. The Lord’s opinion is the one that matters, and He thinks the world of you.",
        },
        {
            title: "Healthy Relationships: How to not mess it up and to fix it if you did",
            room: rooms.sundance,
            demographic: demographics.ssa_women,
            speakers: [
                speakers.kim_shores,
                speakers.sarah_tate,
            ],
            description: "If you’re ready to laugh and probably cry come join us as we get vulnerable about our complete and utter failures at having healthy relationships. Using our God-lead journeys we will discuss the tools we learned over the last several years to help us reverse our unhealthy habits. Topics include brutal (and awesome) honesty, the ever-popular boundaries, and the really excruciatingly painful yet fun process of discovering our motivations.",
        },
        {
            title: "Individual Faith Journeys and Building Zion",
            room: rooms.powder,
            demographic: demographics.trans,
            speakers: [
                speakers.nick_gregory,
                speakers.landon_phillips,
                speakers.katherine_herrmann,
            ],
            description: "Is it possible to maintain hope while dealing with the challenges of gender dysphoria? It can oftentimes be a lonely and challenging road but one that is possible. Come hear the stories of four different individuals as they share their stories on what has brought them hope and how they have been able to build Zion and increase faith in their own lives and others.",
        },
        {
            title: "The Journey: A Story of Love and Acceptance",
            room: rooms.snowbird,
            demographic: demographics.family_friends,
            speakers: [
                speakers.russ_gaede,
            ],
            description: "Dr. Russ will share the journey he and his wife Jennyfer are on with their transdaughter. He will discuss how they came to understand and accept the situation as they travel through ambiguous grief, mental health issues, and balancing their love for their daughter and love for their faith and religion.",
        },
    ],
};
