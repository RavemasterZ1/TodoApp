const express = require('express')
const app = express()
const auth = require('../../middleware/auth')
const {geteveverythings,get_one_todo, get_todo_userin, get_todo_update, get_todo_deleted} = require('./todos.query')

// Get all beers
module.exports = function(app, bcrypt) {
app.get('/todos',auth, (req, res) => {
        geteveverythings(res);
})

app.get('/todos/:id',auth, (req, res) => {
    const id = req.params.id;
   get_one_todo(res)
});

app.post('/todos', auth, (req, res) => {
    get_todo_userin(res)
});

app.put('/todos/:id', auth, (req, res) => {
    const id = req.params.id;
    const title = req.body["title"];
    const description = req.body["description"];
    const status = req.body["status"];
    const  user_id = req.body["user_id"];
 console.log(id, title, description, status, user_id);

 get_todo_update(res, title, description, status, user_id, id);
})

app.delete('/todos/:id', auth, (req, res) => {
    const id = req.params.id;
    get_todo_deleted(res, id);
})

}