'use strict';
const express = require('express');
const app = express();
var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const payment = require('../modules/payment.js');
const members = require('../modules/members.js');

app.get('/getMembershipData', async (req, res, next) => {
  res.status(200).send(await members.getMembershipData());
})

app.post('/add', async (req, res, next) => {
  try{
    const body = req.body;
    const fName = body.fName;
    const lName = body.lName;
    const email = body.email;
    const address = body.address;
    const city = body.city;
    const state = body.state;
    const zip = body.zip;
    const country = body.country;
    const primaryPhone = body.primaryPhone;
    let secondaryPhone = body.secondaryPhone;
    const isPrimary = body.isPrimary;
    const membershipTypeId = body.membershipTypeId;
    let secondaryMembers = JSON.parse(body.secondaryMembers);
    let insertedMembers = {};
    const padding = 8;
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    if (secondaryPhone.trim().length === 0 || JSON.parse(secondaryPhone) == null) secondaryPhone = null;
    if (secondaryMembers == null) secondaryMembers = null;
    
    if(secondaryMembers.length > 0){
      secondaryMembers = secondaryMembers.filter(Boolean);
      insertedMembers = await members.addMembers({fName,lName,email,address,city,state,zip,country,primaryPhone, secondaryPhone,isPrimary,membershipTypeId,secondaryMemberOf : null, secondaryMembers});
    }else{
      insertedMembers = await members.addMember({fName,lName,email,address,city,state,zip,country,primaryPhone, secondaryPhone,isPrimary,membershipTypeId,secondaryMemberOf : null});
    }
    
    let status = 2;
    let title = "jfiofogir";
    let result = "fuifhiurehfuiorh";
    let primaryId = insertedMembers.id;
    let initial = 'F';
    let type = "FAMILY";
    // let primaryName = insertedMembers.get("name");
    let secondaryMembersList = insertedMembers.secondaryMembers || [];
    
    primaryId = `${initial}${zeroPad(primaryId, padding)}`; // "05"
    // let fullName = `${memberInfo.get("fName")} ${memberInfo.get("lName")}`.trim();
    // let secondaryMembers = memberInfo.get("secondaryMembers");
    let temp = []
    // secondaryMembers = secondaryMembers.filter(Boolean);
    // console.log(secondaryMembers);

    for(let i = 0; i < secondaryMembersList.length; i++){
        temp.push({id: `${initial}${zeroPad(secondaryMembersList[i].id,padding)}`, name : secondaryMembersList[i].name})
    }
    secondaryMembers = temp;
    res.status(200).send(members.sendWelcomeEmail({primaryId,fName,lName,email,type,status,title,result,secondaryMembersList}))

  }
  catch(err){
    console.log(err)
    next(err)
  }
})

module.exports = app;
