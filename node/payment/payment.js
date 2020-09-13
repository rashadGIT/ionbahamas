'use strict';

var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
const filename = path.basename(__filename);
const payment = require('../modules/payment.js');

let main = async (amount,nonce) => {
    return await payment.submit(amount,nonce)
}

let amount = process.argv[2];
let nonce = process.argv[3];
main(amount,nonce)
.then(json => {
    console.log(JSON.stringify(json));
    process.exit(0);
})
.catch(err => {
    serverError.sendEmail(filename,err);
    process.exit(1)
});
