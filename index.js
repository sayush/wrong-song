const http = require("http");
const _ = require('lodash');
const requests = require('requests');
const express = require('express');
const app = express();

const VERSION = 'v1'

const PORT = 8000;

app.use(express.static('public'));

function getApiPath(){
    return '/api/v'+VERSION;
}

app.get(getApiPath() + '/health', (req, res) => {
    let d = new Date();
    res.send(d.toISOString() + " Health check acknowledged");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));