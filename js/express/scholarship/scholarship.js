'use strict';
const express = require('express');
const app = express();
var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const scholarship = require('../modules/scholarship.js');

app.post('/submit', async (req, res) => res.send(await scholarship.submit(req.body)))

module.exports = app;
