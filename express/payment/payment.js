'use strict';
const express = require('express');
const app = express();
var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const payment = require('../modules/payment.js');

app.post('/donate', async (req, res) => {
  const body = req.body
  let amount = body.amount;
  let nonce = body.nonce;
  let complete = {};
  let record = {};
  let email = {}
  let isAnonymous = body.isAnonymous

  let pay = await payment.submit(amount,nonce);
  if(pay.status === 200){
    complete.payment = {status : pay.status, title :pay.title, squareStatus : pay.result.payment.status};
    let fName = body.fName;
    let lName = body.lName;
    let donorEmail = body.email;
    let amount = body.amount;
    let donation = body.donation
    if(isAnonymous){
      fName = "Anonymous";
      lName = "Anonymous";
      donorEmail = "Anonymous@Anonymous.com";
    }
    record = await payment.storeRecord({fName, lName, donorEmail, amount, donation});
    if(record.status === 200){
        complete.record = {status : record.status}
        email = await payment.sendThankYou(body,pay)
        if(email.accepted.includes(body.email)){
          complete.email = {status : 200, accepted : body.email}
        }
    }
  }
  if(complete.payment.status === 200 && complete.record.status === 200 && complete.email.status === 200){
    complete.status = 200;
  }
  res.send(complete)
})

module.exports = app;
