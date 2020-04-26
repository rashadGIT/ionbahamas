'use strict';

var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const members = require('../util/members.js');

let main = async (fName,lName,email,address,city,state,zip,country='USA',primaryPhone, secondaryPhone=null,isPrimary=true,membershipTypeId=1,secondaryMembers=[]) => {
    if(secondaryMembers.length > 0){
        secondaryMembers = secondaryMembers.filter(Boolean);
        return await members.addMembers({fName,lName,email,address,city,state,zip,country,primaryPhone, secondaryPhone,isPrimary,membershipTypeId,secondaryMemberOf : null, secondaryMembers})
    }
    return await members.addMember({fName,lName,email,address,city,state,zip,country,primaryPhone, secondaryPhone,isPrimary,membershipTypeId,secondaryMemberOf : null})
}
let fName = process.argv[2];
let lName = process.argv[3];
let email = process.argv[4];
let address = process.argv[5];
let city = process.argv[6];
let state = process.argv[7];
let zip = process.argv[8];
let country = process.argv[9];
let primaryPhone = process.argv[10];
let secondaryPhone = process.argv[11];
let isPrimary = process.argv[12];
let membershipTypeId = process.argv[13];
let secondaryMembers = JSON.parse(process.argv[14]);

if (secondaryPhone.trim().length === 0 || JSON.parse(secondaryPhone) == null) secondaryPhone = undefined;
if (secondaryMembers == null) secondaryMembers = undefined;

main(fName,lName,email,address,city,state,zip,country,primaryPhone,secondaryPhone,isPrimary,membershipTypeId,secondaryMembers)
.then(json => {
    console.log(JSON.stringify(json));
    process.exit(0);
})
.catch(err => {
    console.log(err);
    process.exit(1)
});
