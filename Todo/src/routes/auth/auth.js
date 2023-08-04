const express = require('express')
const app = express()
const connection = require('../../config/db');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const {getuserin, get_login, callback2} = require('../user/user.query')

module.exports = function(app, bcrypt) {
app.post('/login', (req, res) => {
    const email = req.body["email"];

    get_login(res, email, req.body["password"], bcrypt)
});

app.post('/register', (req, res) => {
    const email = req.body["email"];
    var password = req.body["password"];

     password = bcrypt.hashSync(password, 10);
        connection.query('SELECT * FROM `xpregister` WHERE email = ?', [email], (err, rows) => {
            
            if (rows.length > 0) {
                callback2(84, res)
                return;
            } else {
                getuserin(res, email, password)
            }
        })
    })
}
