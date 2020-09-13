var path = require('path');
const resolve = path.resolve;
const payment = resolve(`${resolve(__dirname, '../..')}/express/env/email.env`);
require('dotenv').config({ path: payment });
const pug = require('pug');
const { exit } = require('process');
var email = require(`${resolve(__dirname, '../..')}/express/modules/email.js`);
var donations = require(`${resolve(__dirname, '..')}/modules/donations.js`);
var dateFormat = require('dateformat');
const transporter = email.transporter;

main = async (membersData) => {
    let info = {};
    let count = 1;
    var d = new Date();
    d.setMonth(d.getMonth() - 1)
    let lastMonth = dateFormat(d, "mmmm yyyy");
    let monthlyDonations = await donations.getDonationsThisMonth();
    monthlyDonations = monthlyDonations.map(x => {
        x.Amount = x.Amount.toLocaleString("en-US", {style:"currency", currency:"USD"})
        x.date_donated = new Date(x.date_donated).toLocaleString("en-US", {timeZone: "America/Chicago"})
        return x;
    })
    do {
        try{
            info = await transporter.sendMail({
            from: `${process.env.emailSender} <${process.env.emailUsername}>`,
            to : `${process.env.emailBCC}`,
            subject: `Donation report for ${lastMonth}`, // Subject line
            html: pug.renderFile(`${resolve(__dirname, '..')}/views/donationReport.jade`, {lastMonth,monthlyDonations}),
            });
        } catch(error) {
            console.log(error)
        }
    count++;
    } while ((typeof info.accepted === 'undefined' || !info.accepted.includes(process.env.emailBCC)) && count < 5);
    exit();
}

main();
