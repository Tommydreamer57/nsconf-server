const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout_group, breakout_session, panel, closed } = require('./event-types');
const { rooms } = require('../locations');


module.exports = {
    title: "Breakout 5",
    time: "1:30pm - 2:30pm",
    type: breakout_group,
    selectedSession: null,
    sessions: [
        {
            title: "A Discussion on Healthy Male Friendships",
            room: rooms.wasatch,
            demographic: demographics.ssa_men,
            moderator: speakers.brent_ebmeyer,
            panelists: [
                speakers.jarry_lozano,
                speakers.chad_hill,
                speakers.greg_reichmann,
                speakers.justin_mangum,
                speakers.pret_dahlgren,
                speakers.troy_dahlgren,
            ],
            description: "Many men who are coming to terms with sexual orientation share a history of difficulty connecting with other men in meaningful and satisfying friendships. Even for men who have always had friendships with other men, being open about sexual orientation in these relationships can be scary and intimidating. During this panel discussion we will talk about some of the difficulties that exist in establishing fulfilling, platonic relationships within the SSA/Gay community, and how to avoid frustrating patterns that often come when learning how to be vulnerable and open in friendships. We will discuss what has worked for others and how you can implement these practices into your friendships.",
        },
        {
            title: "Joyfully Navigating Faith & Orientation",
            room: rooms.deer,
            demographic: demographics.general,
            speakers: [
                speakers.charlie_bird,
            ],
            description: "The intersection of faith and sexual orientation can be a source of conflict. In this session, Charlie Bird will share how he has has come to find hope and joy through prayerfully honoring his identity. He will share principles of faith and emotional well being, and explain how for him, being gay and being a disciple of Christ both wholly occupy the same space.",
        },
        {
            title: '"Let it Go!" - The Healing Power of True Surrender',
            room: rooms.brighton_alta,
            demographic: demographics.general,
            speakers: [
                speakers.dan_gray
            ],
            description: 'Individuals struggling with the effects of pornography and other compulsive sexual behaviors often hold on to beliefs and practices which keep them feeling "stuck" and unable to break free of unwanted thinking and behavioral patterns. 12-Step Recovery programs have taught the concept of Surrender as a powerful force in finding freedom from these destructive and addictive behaviors. This workshop will discuss the freeing process of surrendering our hearts to the love and will of our Higher Power and the healing that takes place as we learn to "Be Still," to "Stand Still" and to "Let it Go."',
        },
        {
            title: '"Broken Together": Living and Thriving in a Mixed-orientation Marriage',
            room: rooms.sundance,
            demographic: demographics.ssa_women,
            speakers: [
                speakers.tami_and_ben_wright,
            ],
            description: "Ben and Tami’s anthem of their love is encapsulated in a song by Christian music band Casting Crowns called “Broken Together”. Coming to terms with Tami’s bisexuality has been one of the heaviest yet beautiful challenges she and Ben have faced in their marriage to date. Truly this challenge “broke” them—brought them to their knees and further into each other’s arms as they sought mutual forgiveness, compassion, and heavenly understanding. Learning to be authentic and transparent in the context of their mixed orientation marriage has in reality brought them closer together in a way that only the Atonement of Jesus Christ could make possible. They have learned that being mortal—no matter who you are—means being broken; that Christ’s light can only shine and heal through brokenness; and that He is The One being who makes it possible to live and love “Broken Together.”",
        },
        {
            title: "How I Fit in God's Plan",
            room: rooms.powder,
            demographic: demographics.general,
            speakers: [
                speakers.ky_merkley,
                speakers.brent_schindler,
                speakers.jenn_curtis,
            ],
            description: "Figuring out how to make our lives work within the framework of the gospel while dealing with attractions to the same sex or challenges around gender identity can be a complex and challenging experience. Come hear and learn from the powerful testimonies of several North Star Community members as they share their experiences of fitting into God's Plan.",
        },
        {
            title: "Survival Tips for Family Mental Health and Happiness",
            room: rooms.snowbird,
            demographic: demographics.family_friends,
            speakers: [
                speakers.lisa_hansen,
            ],
            description: "When the rulebook doesn't seem to work anymore, how do you keep the team together? If it isn't the family you thought you would have, what keeps you and your family in the game, and how do you know what the score is? This session will help you build your own playbook.",
        },
    ],
};
