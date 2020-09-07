"use strict";
const sql = require('../util/db.js');
const crypto = require('crypto');
const squareConnect = require('square-connect');
const resolve = require('path').resolve;
const parentDir = resolve(__dirname, '..');
const payment = resolve(`${parentDir}/env/payment.env`);
const emailENV = resolve(`${parentDir}/env/email.env`);
const email = require(`./email.js`);
const transporter = email.transporter;
var dateFormat = require('dateformat');
const nodemailer = require('nodemailer');
const pug = require('pug');

require('dotenv').config({ path: payment });
require('dotenv').config({ path: emailENV });

const submit = async (amount,nonce) => {
    // Set the Access Token
    // const accessToken = 'EAAAELnkfXr4Si_69aAgMOtP4x1SggBsXvUChGPouT69DegJ-idrMxomkaMCxVT0';
    const accessToken = process.env.accessToken;

    // Set Square Connect credentials and environment
    const defaultClient = squareConnect.ApiClient.instance;

    // Configure OAuth2 access token for authorization: oauth2
    const oauth2 = defaultClient.authentications['oauth2'];
    oauth2.accessToken = accessToken;

    // Set 'basePath' to switch between sandbox env and production env
    // sandbox: https://connect.squareupsandbox.com
    // production: https://connect.squareup.com
    //defaultClient.basePath = 'https://connect.squareup.com';
    defaultClient.basePath = process.env.basePath;

   // length of idempotency_key should be less than 45
   const idempotency_key = crypto.randomBytes(22).toString('hex');

   // Charge the customer's card
   const payments_api = new squareConnect.PaymentsApi();
   const request_body = {
     source_id: nonce,
     amount_money: {
       amount: 100 * amount , // $1.00 charge
       currency: 'USD'
     },
     idempotency_key: idempotency_key
   };

   try {
     const response = await payments_api.createPayment(request_body);
     return {
       'status' : 200,
       'title': 'Payment Successful',
       'result': response
     };
   } catch(error) {
     console.log(error)
     return {
      'status' : 500,
       'title': 'Payment Failure',
       'result': error.response.text
     };
   }
}

const storeRecord = async (donationData) => {
  let insert = `INSERT INTO donations
      (id, FName, LName, Email, Amount, Cause)
      VALUES
      (NULL, ?, ?, ?, ?, ?)`;
  return sql.execute(insert,[
      donationData.fName,
      donationData.lName,
      donationData.donorEmail,
      donationData.amount,
      donationData.donation.title
      ])
  .then(x => x[0])
  .then((x) => {
      return {
      status : 200,
      id : x.insertId,
      message : 'Insert successful',
      type : 'Record Inserted'
  }})
  .catch(err => {
      return {
      status : err,
      message : err.message,
      type : 'internal error'
      }
      });
}

const sendThankYou = async (donationData,squareData) => {
  let info = {};
  let count = 1;
  var num = squareData.result.payment.total_money.amount;
  var dollars = num / 100;
  dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  squareData.result.payment.total_money.amount = dollars;
  const myDate = new Date(squareData.result.payment.created_at);
  squareData.result.payment.created_at = dateFormat(myDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  do{
    info = await transporter.sendMail({
      from: `${process.env.emailSender} <${process.env.emailUsername}>`, // sender address
      to : donationData.email,
      bcc : `${process.env.emailBCC}`,
      subject: `${donationData.donation.title} - ${donationData.fName} ${donationData.lName}`, // Subject line
      html: pug.renderFile(`${parentDir}/views/${(donationData.donation.template) ? donationData.donation.template : "generalDonation.jade"}`, {donationData,squareData}) // html body
    });
    count++;
  }while (!info.accepted.includes(donationData.email) && count < 5);
  if(info.accepted.includes(donationData.email)){
    info.status = 200
  }
  return info;
}

// const setEvents = () => {
//     return sql.query('SELECT * FROM users')
//     .then(x => x)
// }

module.exports = {
    submit,
    storeRecord,
    sendThankYou
};
