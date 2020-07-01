"use strict";
var sql = require('../util/db.js');
const crypto = require('crypto');
const squareConnect = require('square-connect');
const resolve = require('path').resolve;
const payment = resolve(`${resolve(__dirname, '..')}/env/payment.env`)
require('dotenv').config({ path: payment });
const nodemailer = require('nodemailer');
const pug = require('pug');
var HashMap = require('hashmap');
const parentDir = resolve(__dirname, '..');
require('dotenv').config({ path: `${parentDir}/env/email.env` });
var sql = require('../util/db.js');
var dateFormat = require('dateformat');
var email = require(`./email.js`);
const transporter = email.transporter;
const filePath = resolve(`${resolve(__dirname, '..')}/docs/ION Media Release Form.pdf`)
const delay = ms => new Promise(res => setTimeout(res, ms));

const submit = async (scholarInfo) => {
  let info = {};
  let count = 1;
  do{
    try{
      info = await transporter.sendMail({
        from: `${process.env.emailSender} <${process.env.emailUsername}>`,
        to : `${scholarInfo.email}`,
        bcc : `${process.env.emailBCC}`,
        subject: `${scholarInfo.name} - Your scholarship application as been delivered`, // Subject line
        html: pug.renderFile(`${parentDir}/views/scholarship.jade`, {scholarInfo}), // html body
        attachments: [
              {
                filename: 'ION Media Release Form.pdf',
                path: `${filePath}`,
                //cid: 'uniq-mailtrap.jade',
                contentType: 'application/pdf'
              }
          ]
      });
    } catch(error) {
      console.log(error)
      await delay(5000);
    }
    count++;
  }while ((typeof info.accepted === 'undefined' || !info.accepted.includes(scholarInfo.email)) && count < 5);
  return info;
}

module.exports = {
    submit
};
