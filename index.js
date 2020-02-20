const express = require('express');
const cors = require('cors');
const schedule = require('./schedule/schedule');
const timestamp = Date.now();
const feedback = require('./feedback/feedback');

const PORT = 5051;

const APP = express();

APP.use(cors());

APP.get('/api/schedule', (req, res) => res.status(200).send(schedule));
APP.get('/api/timestamp', (req, res) => res.status(200).json(timestamp));
APP.get('/api/feedback', (req, res) => res.status(200).send(feedback));

APP.listen(PORT, () => console.log(`NSCONF-server running on ${PORT}`));
