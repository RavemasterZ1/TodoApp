require('dotenv').config();
const express = require('express')
const app = express()
var bcrypt = require('bcryptjs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
require('./routes/user/user')(app, bcrypt);
require('./routes/todos/todos')(app, bcrypt);
require('./routes/auth/auth')(app, bcrypt);

const port = 8000;

 app.listen(port, console.log('The port is running'))