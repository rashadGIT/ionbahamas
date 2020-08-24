'use strict';

const nodemailer = require('nodemailer');
const pug = require('pug');
var path = require('path');
var HashMap = require('hashmap');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
require('dotenv').config({ path: `${parentDir}/env/email.env` });
const members = require('../models/members.js');

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

const getMembers = async() => {
  return await members.getMembers();
}

const getMemberById = async(id) => {
  return await members.getMembers();
}

const getMembershipData = async() => {
  return await  members.getMembershipData();
}

const getMembersByEmailOrPhone = async(email,phone) => {
  return await members.getMembersByEmailOrPhone(email,phone);
}

const sendWelcomeEmail = async (membersData) => {
  console.log(membersData)
  let info = await transporter.sendMail({
    from: `${process.env.emailSender} <${process.env.emailUsername}>`, // sender address
    to : membersData.email,
    subject: 'Welcome to ION Bahamas Today', // Subject line
    html: pug.renderFile(`${parentDir}/views/welcome.jade`, {membersData}) // html body
  });
  return info;
}

const addMember = async (memberData) => {
  return await members.setMember(memberData)
}

const addMembers = async (memberData) => {
  let primary = await members.setMember(memberData);
  if([500].includes(primary.status)){
    return primary;
  }
  let listOfSecondaryMembers = []
  if(primary.status == 200){
    for(let i = 0; i < memberData.secondaryMembers.length; i++){
      let hashmap = new HashMap(memberData.secondaryMembers[i]);
      let fName = hashmap.get("fName")
      let lName = hashmap.get("lName")
      let userInserted = await members.setMember({
        fName : fName,
        lName: lName,
        email: null,
        address: memberData.address,
        city: memberData.city,
        state: memberData.state,
        zip: memberData.zip,
        country: memberData.country,
        primaryPhone: null,
        secondaryPhone: null,
        isPrimary: false,
        membershipTypeId: memberData.membershipTypeId,
        secondaryMemberOf: primary.id,
        isActive: true})
        if(userInserted.status == 200){
          listOfSecondaryMembers.push({
            id : userInserted.id,
            name :  `${fName} ${lName}`
          })
        }
    }
  }
  return {
      id : primary.id,
      name : `${memberData.fName} ${memberData.lName}`,
      secondaryMembers : listOfSecondaryMembers
    }
}

module.exports = {
    getMembers,
    addMember,
    addMembers,
    sendWelcomeEmail,
    getMemberById,
    getMembershipData,
    getMembersByEmailOrPhone
};
