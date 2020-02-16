const speakers = require('../speakers');
const demographics = require('../demographics');
const { breakout, panel } = require('./event-types');
const { rooms } = require('../locations');

const time = "11:00am - 12:30pm";

module.exports = {
    title: "Breakout 1",
    time,
    type: breakout,
    selectedSession: null,
    sessions: [
        {
            title: "The Power of Stillness",
            time,
            type: breakout,
            room: rooms.wasatch,
            demographic: demographics.general,
            speakers: [
                speakers.ty_mansfield,
                speakers.jacob_hess,
                speakers.carrie_skarda,
            ],
            description: "What could more stillness, space and silence do for our relationships, our faith and our lives? How might mindfulness prepare us to more fully receive the healing and enabling power of Christ in our lives as we seek to live faithful to our covenants? Join three of the four coauthors of the recent book The Power of Stillness: Mindful Living for Latter-day Saints (Deseret Book, 2019) as they explore how mindfulness might assist individuals and families navigating questions at the intersection of sexuality, gender, and faith.",
        },
        {
            title: "A house divided: Navigating family dynamics",
            time,
            type: panel,
            room: rooms.deer,
            demographic: demographics.family_friends,
            moderator: speakers.debby_jackson,
            panelists: [
                speakers.dale_larsen,
                speakers.rebecca_silva,
                speakers.janae_monsen,
                speakers.patrice_fairbanks,
            ],
            description: "Is SSA splitting your family apart? Does it cause contention between family members? Do you feel uncomfortable talking to your family members about their same-sex attraction? Do you feel that supporting your SSA son or daughter means that you are condoning their choices? In this panel we will discuss ways in which each member of the family can feel validated, loved, and accepted. We will discuss the difference between condoning and accepting and outline ways to facilitate a respectful and safe space for everyone to be able to express their feelings and opinions without creating an atmosphere of judgement and contention.",
        },
        {
            title: "There IS a Place For Us",
            time,
            type: panel,
            room: rooms.brighton_alta,
            demographic: demographics.trans,
            moderator: speakers.jeff_case,
            panelists: [
                speakers.victoria_adam,
                speakers.lyndsey_andreasky,
                speakers.chelsea_hanson,
                speakers.sean_crandall,
            ],
            description: "With so few people who seem to really understand the issues surrounding gender identity it can be difficult to find support from others, especially within the Church  This panel will discuss the complexities of letting others know what you are feeling and how to express what you need.  It will discuss how to ask for help, and where to look for people who can relate to and support you through this journey.",
        },
        {
            title: "Cycle of Connection and Disconnection in Marriage (Healthy patterns relating to self, spouse, and God.)",
            time,
            type: breakout,
            room: rooms.powder,
            demographic: demographics.couples,
            speaker: [
                speakers.shannon_rants,
            ],
            description: 'Needing to feel hope in your marriage? Stuck in a rut? Repeating unhealthy patterns in your relationship? Come and explore our "Cycle of Connection" and how we can continue to move towards healthy connection even in the midst of feeling disconnected or discouraged.',
        },
        {
            title: "Using Revelation to Nurture a Personal Relationship with God",
            time,
            type: breakout,
            room: rooms.snowbird,
            demographic: demographics.general,
            speaker: [
                speakers.becky_edwards,
            ],
            description: "What is one thing has helped you most to feel God’s love, presence, power, and two-way communication? For me, the answer is Heaven Journaling, a simple process I’ve taught to thousands around the globe that combines prayer, scriptures, and writing to open the windows of heaven’s revelation. President Nelson has been urging us to improve our ability and capacity to receive personal revelation, and this session will be a hands-on experience with this simple yet powerful process.",
        },
    ],
};
