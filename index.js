const express = require('express');
const cors = require('cors');

const events = [
    {
        name: "Temple Session - Bountiful",
        type: "Social",
        day: "Thursday",
        time: "1:00 (meet in chapel at 12:30)",
        location: "Bountiful Temple\n640 Bountiful Blvd,\nBountiful, UT 84010",
        description: "",
    },
    {
        name: "Temple Session - Jordan River",
        type: "Social",
        day: "Thursday",
        time: "1:00 (meet in chapel at 12:30)",
        location: "Jordan River Temple\n10200 S Temple Dr,\nSouth Jordan, UT 84095",
        description: "",
    },
    {
        name: "QPR Suicide Prevention Training",
        type: "Training",
        day: "Thursday",
        time: "3:00-5:00",
        location: "Sheraton Hotel\n150 W 500 S,\nSalt Lake City, UT 84101",
        description: "",
    },
    {
        name: "First-Timers' Session",
        type: "Social",
        day: "Thursday",
        time: "5:00 - 6:00",
        location: "Olympus High School\n4055 S 2300 E,\nHolladay, UT 84124",
        description: "",
    },
    {
        name: "Opening Social",
        type: "Social",
        day: "Thursday",
        time: "6:00 - 8:00",
        location: "Olympus High School\n4055 S 2300 E,\nHolladay, UT 84124",
        description: "",
    },
    // {
    //     name: "",
    //     type: "Social",
    //     day: "Friday",
    //     time: "",
    //     location: "",
    //     description: "",
    // },
];

const PORT = 5050;

const APP = express();

APP.use(cors());

APP.get('/api/events', (req, res) => {
    res.status(200).send(events);
});

APP.listen(PORT, () => console.log(`NSCONF-server running on ${PORT}`));
