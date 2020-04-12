'use strict';

var HashMap = require('hashmap');
var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const members = require('../util/members.js');
const padding = 8;
const zeroPad = (num, places) => String(num).padStart(places, '0');

let main = async (fName,lName,email,type,data/*,memberInfo*/,insertedMembers) => {
    let status = data.get("status");
    let title = data.get("title");
    let result = data.get("result");
    let primaryId = insertedMembers.get("id");
    let initial = type.charAt(0);
    // let primaryName = insertedMembers.get("name");
    let secondaryMembers = insertedMembers.get("secondaryMembers") || [];
    
    primaryId = `${initial}${zeroPad(primaryId, padding)}`; // "05"
    // let fullName = `${memberInfo.get("fName")} ${memberInfo.get("lName")}`.trim();
    // let secondaryMembers = memberInfo.get("secondaryMembers");
    let temp = []
    // secondaryMembers = secondaryMembers.filter(Boolean);
    // console.log(secondaryMembers);

    for(let i = 0; i < secondaryMembers.length; i++){
        temp.push({id: `${initial}${zeroPad(secondaryMembers[i].id,padding)}`, name : secondaryMembers[i].name})
    }
    secondaryMembers = temp;
    return members.sendWelcomeEmail({primaryId,fName,lName,email,type,status,title,result,secondaryMembers})
}
let fName = process.argv[2];
let lName = process.argv[3];
let email = process.argv[4];
let type = process.argv[5];
let data = new HashMap(Object.entries(JSON.parse(process.argv[6])));
let insertedMembers = new HashMap(Object.entries(JSON.parse(process.argv[7])));
// let memberInfo = new HashMap(Object.entries(JSON.parse(process.argv[8])));

main(fName,lName,email,type,data/*,memberInfo*/,insertedMembers)
.then(json => {
    console.log(JSON.stringify(json));
    process.exit(0);
})
.catch(err => {
    console.log(err);
    process.exit(1)
});
