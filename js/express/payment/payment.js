'use strict';
const express = require('express');
const app = express();
var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const payment = require('../modules/payment.js');

app.get('/submit', async (req, res) => {
  let amount = 20;
  let nonce = "fikewjhfoihoifh";
  let pay = await payment.submit(amount,nonce);
  res.send(pay)
})

module.exports = app;
