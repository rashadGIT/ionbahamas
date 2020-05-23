'use strict';
const express = require('express');
const app = express();
var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const payment = require('../modules/payment.js');
const members = require('../modules/members.js');
const HashMap = require('hashmap');

app.get('/getMembershipData', async (req, res, next) => {
  res.status(200).send(await members.getMembershipData());
})

app.post('/clear', async (req, res, next) => {
  res.status(200).send(await members.clear());
})

app.post('/add', async (req, res, next) => {
  let insertedMembers;
  try{
    const body = req.body;
    const amount = body.amount;
    const nonce = body.nonce;
    const fName = body.fName;
    const lName = body.lName;
    const email = body.email;
    const type = body.type;
    const address = body.address;
    const city = body.city;
    const state = body.state;
    const zip = body.zip;
    const country = body.country;
    const primaryPhone = body.primaryPhone;
    let secondaryPhone = body.secondaryPhone;
    const isPrimary = body.isPrimary;
    const membershipTypeId = body.membershipTypeId;
    let secondaryMembers = new HashMap(Object.entries(JSON.parse(body.secondaryMembers))).values();
    insertedMembers = {};
    const padding = 8;
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let temp = []

    if (secondaryPhone.trim().length === 0 || JSON.parse(secondaryPhone) == null) secondaryPhone = null;
    if (secondaryMembers == null) secondaryMembers = null;

    if(secondaryMembers.length > 0){
      secondaryMembers = secondaryMembers.filter(Boolean);
      insertedMembers = await members.addMembers({fName,lName,email,address,city,state,zip,country,primaryPhone, secondaryPhone,isPrimary,membershipTypeId,secondaryMemberOf : null, secondaryMembers});
    }else{
      insertedMembers = await members.addMember({fName,lName,email,address,city,state,zip,country,primaryPhone, secondaryPhone,isPrimary,membershipTypeId,secondaryMemberOf : null});
    }

    if(insertedMembers.status != 200) throw insertedMembers;

    let resp = await payment.submit(amount,nonce);
    if(resp.status != 200) throw resp;
    let status = 2;
    let title = resp.title;
    let result = resp.result;
    let primaryId = insertedMembers.id;
    let initial = type.charAt(0);
    let secondaryMembersList = insertedMembers.secondaryMembers || [];
    primaryId = `${initial}${zeroPad(primaryId, padding)}`;

    for(let i = 0; i < secondaryMembersList.length; i++){
        temp.push({id: `${initial}${zeroPad(secondaryMembersList[i].id,padding)}`, name : secondaryMembersList[i].name})
    }
    secondaryMembers = temp;

    let emailResult = await members.sendWelcomeEmail({primaryId,fName,lName,email,type,status,title,result,secondaryMembers});

    res.status(200)
    .send({
      status : 200,
      to : emailResult.accepted,
      sent : emailResult.accepted.includes(email)
    });
  }
  catch(err){
    if(insertedMembers.status === 200){
      let primary = insertedMembers.id;
      let deleteSecondaryMember = await members.removeMemberByPrimaryId(primary);
      let deleteMember = await members.removeMemberById(primary);
    }
    next(err)
  }
})

module.exports = app;
