// var mysql = require('mysql');
const mysql = require('mysql2/promise');
// const mysql = require('mysql2');
const bluebird = require('bluebird');
var connection = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    Promise: bluebird
});
module.exports = connection;