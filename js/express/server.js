var express = require('express')
var bodyParser=require("body-parser");
var fs = require('fs')
var http = require('http');
var https = require('https')
var util = require('./util.js')
var app = express()
const httpPort = 3000
const httpsPort = 3500

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/util', util);

http.createServer(app).listen(httpPort);
https.createServer({
  key: fs.readFileSync('/home/ionbahamasnet/ssl/keys/cd563_82615_023b7e6433049e6d1e3fae2f3c33b9fe.key'),
  cert: fs.readFileSync('/home/ionbahamasnet/ssl/certs/ionbahamas_net_cd563_82615_1620061939_a7c8589ce2a7e5b79d0a624ee5c86861.crt')
}, app)
.listen(httpsPort, () => {
  console.log(`Example app listening on port ${httpsPort}! Go to https://localhost:${httpsPort}/'`)
})
