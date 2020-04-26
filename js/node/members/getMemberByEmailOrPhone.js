'use strict';

var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const members = require('../util/members.js');

let main = async (email='',phone=0) => {
    let response = await members.getMembersByEmailOrPhone(email,phone);
    return {email : response[0].email.trim().toUpperCase() == email.trim().toUpperCase(), phone : response[0].primary_phone == phone};
}

let email = process.argv[2];
let phone = process.argv[3];

main(email,phone)
.then(json => {
    console.log(JSON.stringify(json));
    process.exit(0);
})
.catch(err => {
    //serverError.sendEmail(filename,err);
    process.exit(1)
});
