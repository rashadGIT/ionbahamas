"use strict";
var path = require('path');
const resolve = path.resolve;
const sql = require(`${resolve(__dirname, '../..')}/express/util/db.js`);

const getDonationsThisMonth = () => {
    return sql.query(`SELECT
        id,
        FName,
        LName,
        Email,
        Amount,
        Cause,
        DATE_FORMAT(date_donated,"%W, %M %D, %Y %l:%i:%s %p") date_donated
        FROM donations
        where date_donated between
        (DATE_FORMAT(CURRENT_DATE() - INTERVAL 1 MONTH,'%Y-%m-01')) AND DATE_FORMAT(CURRENT_DATE() - INTERVAL 0 MONTH,'%Y-%m-01')`)
    .then(x => x[0])
    .catch(err => {
        return {
          status : 500,
          message : err.message,
          type : 'internal error'
          }
    });
}



module.exports = {
    getDonationsThisMonth
};
