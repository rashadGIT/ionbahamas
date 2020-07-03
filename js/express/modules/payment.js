"use strict";
var sql = require('../util/db.js');
const crypto = require('crypto');
const squareConnect = require('square-connect');
const resolve = require('path').resolve;
const payment = resolve(`${resolve(__dirname, '..')}/env/payment.env`)
require('dotenv').config({ path: payment });

const submit = async (amount,nonce) => {
    // Set the Access Token
    // const accessToken = 'EAAAELnkfXr4Si_69aAgMOtP4x1SggBsXvUChGPouT69DegJ-idrMxomkaMCxVT0';
    const accessToken = `${process.env.accessToken}`;

    // Set Square Connect credentials and environment
    const defaultClient = squareConnect.ApiClient.instance;

    // Configure OAuth2 access token for authorization: oauth2
    const oauth2 = defaultClient.authentications['oauth2'];
    oauth2.accessToken = accessToken;

    // Set 'basePath' to switch between sandbox env and production env
    // sandbox: https://connect.squareupsandbox.com
    // production: https://connect.squareup.com
    defaultClient.basePath = 'https://connect.squareup.com';

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
     return {
      'status' : 500,
       'title': 'Payment Failure',
       'result': error.response.text
     };
   }
}

const setEvents = () => {
    return sql.query('SELECT * FROM users')
    .then(x => x)
}

module.exports = {
    submit,
    setEvents
};
