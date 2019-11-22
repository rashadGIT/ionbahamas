var express = require('express');
const app = express();
var router = express.Router();
var wallet = require('../models/email.js');
const mailer = require('express-mailer');

mailer.extend(app, {
  from : process.env.emailSender +' <'+process.env.emailUsername+'>',
  host: process.env.emailHost, // hostname
  secureConnection: true, // use SSL
  port: process.env.emailPort, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  secure: true, // use TLS
  auth: {
      user: process.env.emailUsername,
      pass: process.env.emailPassword
  }
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

router.post('/send', async (req,res,next) => {
  app.mailer.send('error', {
    to: process.env.emailAdmin,
    subject: 'System Error 500', // REQUIRED.
    otherProperty: 'Other Property', // All additional properties are also passed to the template as local variables.
    error : {stack : "fiujwhbneif", status : "fhbuhbfivugrb"}
  },(err) => {
    if (err) {
      console.log(err);
      return;
    }
    return;
  });
  res.status(200).send({});
});

module.exports = router;