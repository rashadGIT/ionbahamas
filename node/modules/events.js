"use strict";
var sql = require('../util/db.js');

const getEvents = () => {
    return sql.query('SELECT * FROM users')
    .then(x => x)
}

const setEvents = () => {
    return sql.query('SELECT * FROM users')
    .then(x => x)
}

module.exports = {
    getEvents,
    setEvents
};