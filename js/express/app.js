const express = require('express')
const app = express()
const https = require('https');
const port = 3500
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/fire', (req, res) => res.send(myCar))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)):
