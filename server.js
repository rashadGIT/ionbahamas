/*
  Copyright 2019 Square Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const crypto = require('crypto');
const squareConnect = require('square-connect');
const mailer = require('express-mailer');
var account = require('./routes/account');
var wallet = require('./routes/wallet');
var auth = require('./routes/auth');
var payment = require('./routes/payment');
var email = require('./routes/email');
require('dotenv').config()

// Set the Access Token
const accessToken = 'EAAAELnkfXr4Si_69aAgMOtP4x1SggBsXvUChGPouT69DegJ-idrMxomkaMCxVT0';

// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';

mailer.extend(app, {
    from : process.env.emailSender +' <'+process.env.emailUsername+'>',
    host: process.env.emailHost, // hostname
    secureConnection: true, // use SSL
    port: process.env.emailPort, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    secure: true, // use TLS
    auth: {
        user: process.env.emailUsername,
        pass: process.env.emailPassword
    }
});

app.set('views', __dirname + '/routes/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/ping', (req, res) => {
 return res.send('pong');
});

app.use('/auth', auth);
app.use('/account', account);
app.use('/wallet', wallet);
app.use('/email', email);
app.use('/payment', payment);


// app.post('/process-payment', async (req, res) => {
//   const request_params = req.body;
//   console.log(request_params.nonce)
//   console.log(parseInt(request_params.amount))

//   // length of idempotency_key should be less than 45
//   const idempotency_key = crypto.randomBytes(22).toString('hex');

//   // Charge the customer's card
//   const payments_api = new squareConnect.PaymentsApi();
//   const request_body = {
//     source_id: request_params.nonce,
//     amount_money: {
//       amount: 100 * parseInt(request_params.amount), // $1.00 charge
//       currency: 'USD'
//     },
//     idempotency_key: idempotency_key
//   };

//   try {
//     const response = await payments_api.createPayment(request_body);
//     res.status(200).json({
//       'title': 'Payment Successful',
//       'result': response
//     });
//   } catch(error) {
//     res.status(500).json({
//       'title': 'Payment Failure',
//       'result': error.response.text
//     });
//   }
// });

app.listen((process.env.PORT || 8080),() => {
    console.log(`listening on - http://localhost:${process.env.PORT}`)
});