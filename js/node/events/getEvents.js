'use strict';

var path = require('path');
const resolve = path.resolve;
const parentDir = resolve(__dirname, '..');
let filename = path.basename(__filename)

let main = async () => {
    return "jherwifgherihgoierhoig"
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
