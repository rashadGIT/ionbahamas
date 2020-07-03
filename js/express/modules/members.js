'use strict';

const nodemailer = require('nodemailer');
const pug = require('pug');
var path = require('path');
var HashMap = require('hashmap');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
require('dotenv').config({ path: `${parentDir}/env/email.env` });
var sql = require('../util/db.js');
var dateFormat = require('dateformat');
var email = require(`./email.js`);
const transporter = email.transporter;

const getMemberById = async(id) => await members.getMembers();

const sendWelcomeEmail = async (membersData) => {
  let info = {};
  let count = 1;
  var num = membersData.result.payment.total_money.amount;
  var dollars = num / 100;
  dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  membersData.result.payment.total_money.amount = dollars;
  const myDate = new Date(membersData.result.payment.created_at);
  membersData.result.payment.created_at = dateFormat(myDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  do{
    info = await transporter.sendMail({
      from: `${process.env.emailSender} <${process.env.emailUsername}>`, // sender address
      to : membersData.email,
      bcc : `info@ionbahamas.org;rashad.barnett@gmail.com`,
      subject: `Welcome to ION Bahamas ${membersData.fName} ${membersData.lName}`, // Subject line
      html: pug.renderFile(`${parentDir}/views/welcome.jade`, {membersData}) // html body
    });
    count++;
  }while (!info.accepted.includes(membersData.email) && count < 5);
  return info;
}

const addMember = async (memberData) => {
  return await setMember(memberData)
}

  const removeMemberById = async (id) => {
    return await deleteMember(id);
  }

  const removeMemberByPrimaryId = async (id) => {
    return await deleteSecondaryMember(id);
  }

  const clear = async () => {
    await deleteAllSecondaryMember();
    return await deleteAllPrimaryMember();
  }

const addMembers = async (memberData) => {
    let primary = await setMember(memberData);
    if([500,411].includes(primary.status)){
      return primary;
    }
    let listOfSecondaryMembers = []
    if(primary.status == 200){
      for(let i = 0; i < memberData.secondaryMembers.length; i++){
        let secondaryMember = new HashMap(memberData.secondaryMembers[i]);
        let fName = secondaryMember.get("fName");
        let lName = secondaryMember.get("lName");
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
      status : 200,
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
  return sql.query(`select email, primary_phone from members where
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

const deleteAllPrimaryMember = () => {
  let deleteSQL = "delete FROM members";
  return sql.execute(deleteSQL);
}

const deleteAllSecondaryMember = () => {
  let deleteSQL = "delete FROM members where IsPrimary = 0";
  return sql.execute(deleteSQL);
}


const deleteMember = (id) => {
  let deleteSQL = "delete FROM members where id = ?";
  return sql.execute(deleteSQL,[id]);
}

const deleteSecondaryMember = (id) => {
  let deleteSQL = "delete FROM members where secondary_member_of = ?";
  return sql.execute(deleteSQL,[id]);
}

const setMember = (memberData) => {
  let insert = `INSERT INTO members
      (id, FName, LName, Email, Address, City, State, Zip, Country, primary_phone,secondary_phone,IsPrimary, membershipType_id, secondary_member_of, isActive,date_created)
      VALUES
      (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,NOW())`;
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
      let isDuplicate = err.message.replace(/\s.*/,'').toUpperCase().trim() === "DUPLICATE";
      let errCode = 500;
      if(isDuplicate) errCode = 411;
      console.log(err.message)
      return {
      status : errCode,
      message : err.message,
      type : 'internal error'
      }
      });
}

module.exports = {
    getMembers,
    addMember,
    removeMemberById,
    removeMemberByPrimaryId,
    addMembers,
    sendWelcomeEmail,
    getMemberById,
    getMembershipData,
    getMembersByEmailOrPhone,
    clear
};
