'use strict';

var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const members = require('../util/members.js');

let main = async () => await members.getMembers();

main()
.then(json => {
    console.log(JSON.stringify(json));
    process.exit(0);
})
.catch(err => {
    //serverError.sendEmail(filename,err);
    process.exit(1)
});
