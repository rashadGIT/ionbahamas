var path = require('path');
const resolve = path.resolve;
const payment = resolve(`${resolve(__dirname, '../..')}/express/env/email.env`);
require('dotenv').config({ path: payment });
const pug = require('pug');
const { exit } = require('process');
var email = require(`${resolve(__dirname, '../..')}/express/modules/email.js`);
var members = require(`${resolve(__dirname, '..')}/modules/members.js`);
var dateFormat = require('dateformat');
const transporter = email.transporter;

main = async () => {
    try{
    let info = {};
    let count = 1;
    var d = new Date();
    let sent = false;
    d.setMonth(d.getMonth() - 1)
    let lastMonth = dateFormat(d, "mmmm yyyy");
    let lastMonthSignUps = await members.getLastMonthsMembers();
    if(lastMonthSignUps.length === 0) exit();
    let totalNewMembers = lastMonthSignUps.length;
    let revenue = lastMonthSignUps.map(x => x.Price).reduce((a,b) => a + b).toLocaleString("en-US", {style:"currency", currency:"USD"})
    lastMonthSignUps = lastMonthSignUps.map(x => {
        x.Price = x.Price.toLocaleString("en-US", {style:"currency", currency:"USD"})
        return x;
    })

    do {
        try{
            info = await transporter.sendMail({
            from: `${process.env.emailSender} <${process.env.emailUsername}>`,
            to : `${process.env.emailBCC}`,
            subject: `New Member/Renewal report for ${lastMonth}`, // Subject line
            html: pug.renderFile(`${resolve(__dirname, '..')}/views/newSignUps.jade`, {lastMonth,lastMonthSignUps,totalNewMembers,revenue}),
            });
        } catch(error) {
            console.log(error)
        }

        let sentToArray = process.env.emailBCC.split(";").filter(x => x.length > 0);
        sentToArray.sort();
        info.accepted.sort();
        sent = JSON.stringify(sentToArray) === JSON.stringify(info.accepted);
        count++;
    } while (!sent && count < 5);
    }catch(err){
        console.log(err)
        exit(1);
    }
    exit();
}

main();
