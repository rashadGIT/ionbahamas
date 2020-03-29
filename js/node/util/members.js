'use strict';

const members = require('../models/members.js');

const getMembers = async() => {
    return await await members.getMembers();
}

const getMemberById = async(id) => {
  return await await members.getMembers();
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
       let userInserted = await members.setMember({
        fName : memberData.secondaryMembers[i].fName,
        lName: memberData.secondaryMembers[i].lName,
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
            name :  `${memberData.secondaryMembers[i].fName} ${memberData.secondaryMembers[i].lName}`
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
    addMembers
};