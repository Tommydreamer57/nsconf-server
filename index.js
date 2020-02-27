require('dotenv').config();
const express = require('express');
const cors = require('cors');
const schedule = require('./schedule/schedule');
const feedback = require('./feedback/feedback');
const homeLinks = require('./home-links/home-links');

const {
    env: {
        timestamp = 1000,
    },
} = process;

const PORT = 5051;

const APP = express();

APP.use(cors());

APP.get('/api/schedule', (req, res) => res.status(200).send(schedule));
APP.get('/api/timestamp', (req, res) => res.status(200).json(timestamp));
APP.get('/api/feedback', (req, res) => res.status(200).send(feedback));
APP.get('/api/home', (req, res) => res.status(200).send(homeLinks));
APP.get('/api', (req, res) => res.status(200).send({
    timestamp,
    schedule,
    feedback,
    homeLinks,
}));

const sendDataWithTimestamp = (res, data) => res.status(200).send({ data, timestamp });

APP.get('/api/2/schedule', (req, res) => sendDataWithTimestamp(res, schedule));
APP.get('/api/2/timestamp', (req, res) => sendDataWithTimestamp(res, timestamp));
APP.get('/api/2/feedback', (req, res) => sendDataWithTimestamp(res, feedback));
APP.get('/api/2/home', (req, res) => sendDataWithTimestamp(res, homeLinks));

APP.listen(PORT, () => console.log(`NSCONF-server running on ${PORT}`));
