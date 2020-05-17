'use strict';

const nodemailer = require('nodemailer');
const pug = require('pug');
var path = require('path');
var HashMap = require('hashmap');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
require('dotenv').config({ path: `${parentDir}/env/email.env` });
var sql = require('../util/db.js');
//const members = require('./members.js');

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

// const getMembers = async() => {
//   return await members.getMembers();
// }

const getMemberById = async(id) => {
  return await members.getMembers();
}

// const getMembershipData = async() => {
//   return await  members.getMembershipData();
// }

// const getMembersByEmailOrPhone = async(email,phone) => {
//   return await members.getMembersByEmailOrPhone(email,phone);
// } 

const sendWelcomeEmail = async (membersData) => {
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
  let primary = await setMember(memberData);
  if([500].includes(primary.status)){
    return primary;
  }
  let listOfSecondaryMembers = []
  if(primary.status == 200){
    for(let i = 0; i < memberData.secondaryMembers.length; i++){
      let secondaryMember = memberData.secondaryMembers[i];
      let fName = secondaryMember.fName;
      let lName = secondaryMember.lName;
      let userInserted = await setMember({
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

const getMembershipData = () => {
  return sql.query(`SELECT id, Type, Price FROM membershipType`)
  .then(x => x[0])
  .catch(err => {
      return {
        status : 500,
        message : err.message,
        type : 'internal error'
        }
  });
}

const getMembersByEmailOrPhone = (email,phone) => {
  return sql.query(`select email, primary_phone from rashadba_IonTest.members where 
  upper(Email) = upper(?) or 
  primary_phone = ? LIMIT 1`,[email,phone])
  .then(x => x[0])
  .catch(err => {
      return {
        status : 500,
        message : err.message,
        type : 'internal error'
        }
  });
}


const getMembers = () => {
  return sql.query(`Select 
  members.id,
  members.FName,
  members.LName,
  members.Email,
  members.Address,
  members.City,
  members.State,
  members.Zip,
  members.Country,
  members.primary_phone,
  members.secondary_phone,
  members.IsPrimary,
  members.secondary_member_of,
  members.isActive,
  membershipType.Type
  from members 
  inner join membershipType
  on 
  (members.membershipType_id = membershipType.id)`)
  .then(x => x[0])
  .catch(err => {
      return {
        status : 500,
        message : err.message,
        type : 'internal error'
        }
  });
}



const setMember = (memberData) => {
  let insert = `INSERT INTO members
      (id, FName, LName, Email, Address, City, State, Zip, Country, primary_phone,secondary_phone,IsPrimary, membershipType_id, secondary_member_of, isActive)
      VALUES 
      (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)`;
  return sql.execute(insert,[
      memberData.fName,
      memberData.lName,
      memberData.email,
      memberData.address,
      memberData.city,
      memberData.state,
      memberData.zip,
      memberData.country,
      memberData.primaryPhone,
      memberData.secondaryPhone,
      (memberData.isPrimary ? 1:0),
      memberData.membershipTypeId,
      memberData.secondaryMemberOf,
      1])
  .then(x => x[0])
  .then((x) => {
      return {
      status : 200,
      id : x.insertId,
      message : 'Insert successful',
      type : 'Record Inserted'
  }})
  .catch(err => {
      console.log(err)
      return {
      status : 500,
      message : err.message,
      type : 'internal error'
      }
      });
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