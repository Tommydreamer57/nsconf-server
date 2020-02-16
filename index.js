const express = require('express');
const cors = require('cors');
const schedule = require('./schedule/schedule');

const PORT = 5051;

const APP = express();

APP.use(cors());

APP.get('/api/schedule', (req, res) => res.status(200).send(schedule));

APP.get('/api/latest', (req, res) => res.status(200).json(schedule.updatedAt));

APP.listen(PORT, () => console.log(`NSCONF-server running on ${PORT}`));
