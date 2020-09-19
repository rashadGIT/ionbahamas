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

main = async () => {
    try{
        let info = {};
        let count = 1;
        var d = new Date();
        d.setMonth(d.getMonth() - 1)
        let lastMonth = dateFormat(d, "mmmm yyyy");
        let monthlyDonations = await donations.getDonationsThisMonth();
        if(monthlyDonations.length === 0) exit();
        let total = monthlyDonations.map(x => x.Amount).reduce((a,b) => a + b).toLocaleString("en-US", {style:"currency", currency:"USD"})
        monthlyDonations = monthlyDonations.map(x => {
            x.Amount = x.Amount.toLocaleString("en-US", {style:"currency", currency:"USD"})
            return x;
        })

        do {
            try{
                info = await transporter.sendMail({
                from: `${process.env.emailSender} <${process.env.emailUsername}>`,
                to : `${process.env.emailBCC}`,
                subject: `Donation report for ${lastMonth}`, // Subject line
                html: pug.renderFile(`${resolve(__dirname, '..')}/views/donationReport.jade`, {lastMonth,monthlyDonations,total}),
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
        exit(1)
    }
    exit();
}

main();
