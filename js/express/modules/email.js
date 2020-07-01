'use strict';
const nodemailer = require('nodemailer');
const pug = require('pug');
var path = require('path');
var HashMap = require('hashmap');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
require('dotenv').config({ path: `${parentDir}/env/email.env` });
const members = require('./members.js');

const transporter = nodemailer.createTransport({
  host: process.env.emailHost,
  port: process.env.emailPort,
  secure: true, // true for 465, false for other ports
  auth: {
      user: process.env.emailUsername, // generated ethereal user
      pass: process.env.emailPassword // generated ethereal password
  },
  debug: false, // show debug output
  logger: false // log information in console
});

const sendWelcomeEmail = async (membersData) => {
    let info = await transporter.sendMail({
        from: `${process.env.emailSender} <${process.env.emailUsername}>`, // sender address
        to : membersData.email,
        subject: 'Welcome to ION Bahamas Today', // Subject line
        html: pug.renderFile(`${parentDir}/views/welcome.jade`, {membersData}) // html body
    });
    return info;
}

const sendScholarshipEmail = async (membersData) => {
    let info = await transporter.sendMail({
        from: `${process.env.emailSender} <${process.env.emailUsername}>`, // sender address
        to : membersData.email,
        subject: 'Welcome to ION Bahamas Today', // Subject line
        html: pug.renderFile(`${parentDir}/views/welcome.jade`, {membersData}) // html body
    });
    return info;
}

module.exports = {
    sendWelcomeEmail,
    sendScholarshipEmail,
    transporter
};
