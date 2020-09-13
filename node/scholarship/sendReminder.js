var path = require('path');
const resolve = path.resolve;
const payment = resolve(`${resolve(__dirname, '../..')}/express/env/email.env`)
require('dotenv').config({ path: payment });
const pug = require('pug');
var email = require(`${resolve(__dirname, '../..')}/express/modules/email.js`);
const transporter = email.transporter;
let renewMembers = [
    // {
    //     email : "christal.m.johnson@gmail.com",
    //     Name : 'Christal Johnson',
    // },
    // {
    //     email : "powellzar@gmail.com",
    //     Name : 'Zahra Powell',
    // },
    // {
    //     email : "W211490794@student.hccs.edu",
    //     Name : 'Ronald Ferguson Jr',
    // },
    // {
    //     email : "m.lloyd.chacon@gmail.com",
    //     Name : 'Michael Lloyd Chacon',
    // },
    // {
    //     email : "donnishaj3@gmail.com",
    //     Name : 'Donnisha Johnson',
    // },
    // {
    //     email : "oliciasmith918@gmail.com",
    //     Name : 'Olicia Smith',
    // },
    // {
    //     email : "braden.darville@gmail.com",
    //     Name : 'Braden Victoria Darville',
    // }
]

main = async (membersData) => {
    let info = {};
    let count = 1;
    do {
        try{
            info = await transporter.sendMail({
            from: `${process.env.emailSender} <${process.env.emailUsername}>`,
            to : `${membersData.email}`,
            bcc : `${process.env.emailBCC}`,
            subject: `ION Bahamas 2020/2021 Scholarship recipient - ${membersData.Name}`, // Subject line
            html: pug.renderFile(`${resolve(__dirname, '../..')}/express/views/congratsScholarship.jade`, {membersData}),
            attachments: [
                {
                  filename: 'ION Media Release Form.pdf',
                  path: `${resolve(__dirname, '../..')}/express/docs/ION Media Release Form.pdf`,
                  cid: 'uniq-mailtrap.jade' 
                }
            ]
            });
        } catch(error) {
            console.log(error)
            await delay(5000);
        }
    count++;
    } while ((typeof info.accepted === 'undefined' || !info.accepted.includes(membersData.email)) && count < 5);
}

for (let i = 0; i < renewMembers.length; i++){
   main(renewMembers[i]);
   console.log(`${renewMembers[i].email} sent`)
}
