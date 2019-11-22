"use strict";
var express = require('express');
const app = express();
var router = express.Router();
const account = require('../models/account.js');
var jwt = require('jsonwebtoken');
const expiryTime = 60 * 1000 * 15;
var mailer = require('express-mailer');
require('dotenv').config();

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

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

router.post('/signIn', async (req,res,next) => {
  try{
    let user = await account.getUser(req.body.email,req.body.password);
    if([401,403,500].includes(user.status)) {
      res.status(user.status).send(user);
      return;
    }
    req.session.cookie.maxAge = expiryTime;
    req.session.user = user;
    var token = jwt.sign(user, process.env.JWT_ENCRYPTION);
    res.status(user.status).json(token);
  }catch(error){
    next(error)
  }
});

router.post('/signUp', async (req,res,next) => {
  try{
    let data = req.body;
    if(data === null) {
      res.status(401).send(null)
      return;
    }
    let recordReport = await account.addUser(data.name,data.email, data.password,data.publicKey);
    if([500].includes(recordReport.status)){
      res.status(recordReport.status).send(recordReport);
      return;
    }

    app.mailer.send('signUp', {
      to: data.email,
      subject: 'Welcome to Crytoplex', // REQUIRED.
      otherProperty: 'Other Property', // All additional properties are also passed to the template as local variables.
      user : { username : data.name }
    },(err) => {
      if (err) {
        return;
      }
      return;
    });

    res.status(recordReport.status).send(recordReport);
  }catch(error){
    next(error)
  }
});

router.post('/forgotPassword', (req,res,next) => {
  let data = req.body;
  if(data === null) {
    res.status(401).send(null)
    return;
  }

  app.mailer.send('forgotPassword', {
    to: data.email,
    subject: 'forgot Password',
    otherProperty: 'Other Property'
  },(err) => {
    if (err) {
      console.log(err);
      return;
    }
    return;
  });

  res.status(200).send({status:200, msg: "Email Sent"});
});

router.post('/resetPassword', async (req,res,next) => {
  let data = req.body;
  const success = await account.resetPassword(data.email, data.password);
  res.status(200).send(success)
})

router.post('/updateEmail',(req, res, next) => {
  res.status(200).send("updateEmail")
})

router.post('/updateProfileInfo', async (req, res, next) => {
  let data = req.body;
  const success = await account.updateProfileInfo(data.email,data.newName,data.newPublicKey);
  res.status(200).send(success);
})

router.post('/getProfileInfo', async (req, res, next) => {
  let data = req.body;
  const user = await account.getProfileInfo(data.email);
  res.status(200).send(user);
})

module.exports = router;