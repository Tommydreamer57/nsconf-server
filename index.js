const express = require('express');
const cors = require('cors');

const events = [
    {
        name: "Temple Session - Bountiful",
        type: "Social",
        day: "Thursday",
        time: "1:00pm (meet in chapel at 12:30pm)",
        location: "Bountiful Temple\n640 Bountiful Blvd,\nBountiful, UT 84010",
        description: "",
    },
    {
        name: "Temple Session - Jordan River",
        type: "Social",
        day: "Thursday",
        time: "1:00pm (meet in chapel at 12:30pm)",
        location: "Jordan River Temple\n10200 S Temple Dr,\nSouth Jordan, UT 84095",
        description: "",
    },
    {
        name: "QPR Suicide Prevention Training",
        type: "Training",
        day: "Thursday",
        time: "3:00pm - 5:00pm",
        location: "Sheraton Hotel\n150 W 500 S,\nSalt Lake City, UT 84101",
        description: "",
    },
    {
        name: "First-Timers' Session",
        type: "Social",
        day: "Thursday",
        time: "5:00pm - 6:00pm",
        location: "Olympus High School\n4055 S 2300 E,\nHolladay, UT 84124",
        description: "",
    },
    {
        name: "Opening Social",
        type: "Social",
        day: "Thursday",
        time: "6:00pm - 8:00pm",
        location: "Olympus High School\n4055 S 2300 E,\nHolladay, UT 84124",
        description: "",
    },
    {
        name: "Registration",
        type: "Registration",
        day: "Friday",
        time: "7:00am - 9:00am",
        location: "",
        description: "",
    },
    {
        name: "Lunch",
        type: "Meal",
        day: "Friday",
        time: "12:45pm -2:00pm",
        room: "Grand Ballroom",
        description: "",
    },
    {
        name: "Registration",
        type: "Registration",
        day: "Saturday",
        time: "7:00am - 9:00am",
        location: "",
        description: "",
    },
    {
        name: "Lunch",
        type: "Meal",
        day: "Saturday",
        time: "12:15pm - 1:30pm",
        room: "Grand Ballroom",
        description: "",
    },
    {
        name: "Testimony Meeting",
        type: "Meeting",
        day: "Sunday",
        time: "9:00am - 11:00am",
        room: "",
        description: "",
    }
];

const PORT = 5050;

const APP = express();

APP.use(cors());

APP.get('/api/events', (req, res) => {
    res.status(200).send(events);
});

APP.listen(PORT, () => console.log(`NSCONF-server running on ${PORT}`));
