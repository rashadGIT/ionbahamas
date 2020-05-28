const express = require('express')
const bodyParser=require("body-parser");
const fs = require('fs');
const cors = require('cors');
const http = require('http');
const https = require('https')
const payment = require('./payment/payment.js')
const members = require('./members/members.js')
const util = require('./util/util.js')
const app = express()
const resolve = require('path').resolve;
const paymentPath = resolve(`${resolve(__dirname, '..')}/express/env/ssl.env`)
const env = require('dotenv').config({ path: paymentPath });
const httpPort = 3001
const httpsPort = 3500
const httpsKeys = {
  key: fs.readFileSync(process.env.KEY_PATH),
  cert: fs.readFileSync(process.env.CERTIFICATE_PATH)
};

/*Sets Headers*/
app.all('*', (req, res, next) => {
  let origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/util', util);
app.use('/members', members);
app.use('/payment', payment);

/*Catches 500 errors*/
app.use((err, req, res, next) => {
  console.log(err);
  res.status(411).send(err)
});

/*Catches 500 errors*/
app.use((err, req, res, next) => {
  res.status(500).send(err)
});

/*Catches 404 errors*/
app.use((req, res, next) => res.status(404).send("Sorry can't find that!"));

/*
  These lines must always be the last 2 lines
  Sending HTTP and HTTPS request to resuester.
*/
http.createServer(app).listen(httpPort);
https.createServer(httpsKeys,app).listen(httpsPort)
