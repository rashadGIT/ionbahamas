'use strict';
const nodemailer = require('nodemailer');
const pug = require('pug');
var path = require('path');
var HashMap = require('hashmap');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
require('dotenv').config({ path: `${parentDir}/env/email.env` });

const transporter = nodemailer.createTransport({
    host: process.env.emailHost,
    port: process.env.emailPort,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.emailUsername, // generated ethereal user
        pass: process.env.emailPassword // generated ethereal password
    },
    tls: { rejectUnauthorized: false },
    requireTLS: false, 
    debug: false, // show debug output
    logger: false // log information in console
  });

module.exports = {
    transporter
};
