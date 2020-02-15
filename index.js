const express = require('express');
const cors = require('cors');
const events = require('./schedule/schedule');

const PORT = 5050;

const APP = express();

APP.use(cors());

APP.get('/api/schedule', (req, res) => {
    res.status(200).send(events);
});

APP.listen(PORT, () => console.log(`NSCONF-server running on ${PORT}`));
