const { response } = require('express')
const express = require('express')
const auth = require('../../middleware/auth')
const app = express()
const {geteverybody,get_alluser, getall2, getinsert, getdeleted} = require('./user.query')

// Get all beers
module.exports = function(app, bcrypt) {
app.get('/user', auth, (req, res) => {
        geteverybody(res);
        
})

app.get('/user/todos', auth, (req, res) => {
    get_alluser(res);
})

// Get all beers
app.get('/users/:id', auth, (req, res) => {
    getall2(res);
})

app.put('/users/:id', auth, (req, res) => {
    const id = req.params.id;
    const email = req.body["email"];
    const name = req.body["name"];
    const firstname = req.body["firstname"];
    const  password = req.body["password"];
 console.log(id, email, name, firstname, password);

    getinsert(res, name, email, firstname, password, id);
})

// Delete a beer
app.delete('/users/:id', auth, (req, res) => {
    const id = req.params.id;
 getdeleted(res, id);
})
}