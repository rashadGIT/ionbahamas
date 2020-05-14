const mysql = require('mysql2-promise')();
const bluebird = require('bluebird');
const resolve = require('path').resolve;
const db = resolve(`${resolve(__dirname, '..')}/env/db.env`)
require('dotenv').config({ path: db });

mysql.configure({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    Promise: bluebird
});

module.exports = mysql;
