var express = require('express')
var fs = require('fs')
var http = require('http');
var https = require('https')
var app = express()
const port = 3500
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/fire', (req, res) => res.send(myCar))

var httpServer = http.createServer(app)
.listen(port);
;
https.createServer({
  key: fs.readFileSync('/home/ionbahamasnet/ssl/keys/cd563_82615_023b7e6433049e6d1e3fae2f3c33b9fe.key'),
  cert: fs.readFileSync('/home/ionbahamasnet/ssl/certs/ionbahamas_net_cd563_82615_1620061939_a7c8589ce2a7e5b79d0a624ee5c86861.crt')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
