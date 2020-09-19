'use strict';

var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const events = require('../models/events.js');

let main = async () => {
    return await events.getEvents()
}

main()
.then(json => {
    console.log(JSON.stringify(json));
    process.exit(0);
})
.catch(err => {
    serverError.sendEmail(filename,err);
    process.exit(1)
});
