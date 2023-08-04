const connection = require('../../config/db');
const jwt = require('jsonwebtoken');

const geteveverythings = (res,id) => {
    connection.query('SELECT * from todo', (err, rows) => {

        if (!err) {
            res.status(200);
            res.send(rows)
        } else {
            console.log(err)
        }
        console.log('The data from todo table are: \n', rows)
    })
}


const get_one_todo = (res,id) => {
    connection.query('select * FROM todo WHERE id = 1', [id], (err, rows) => {

        if (!err) {
            res.status(200);
            res.send(rows)
        } else {
            console.log(err)
        }

        // if(err) throw err
        console.log('The data from todo table are: \n', rows)
    })
}

const get_todo_userin = (res, params) => {
    connection.query('INSERT INTO `todo` (`title`,`description`, `status`, `user_id`) VALUES (\'Blanche neige\', \'It is a project wichc is based on a fictif story\', \'On going\',\'3\')', params, (err, rows) => {
        if (!err) {
            res.status(200);
            res.send(rows)
        } else {
            console.log(err)
        }
        
        console.log('The data from todo table are:11 \n', rows)

        })
}

const get_todo_update = (res, title, description, status, user_id, id) => {
connection.query('UPDATE todo SET title = ?, description = ?, status = ?, user_id = ? WHERE id = ?', [title,  description, status, user_id, id] , (err, rows) => {

    if(!err) {
        res.status(200);
        res.send(rows)
    } else {
        res.status(500).json({"msg":"internal server error"})
    }

})
}

const get_todo_deleted = (res, id) => {
    connection.query('DELETE FROM todo WHERE id = ?', [id], (err, rows) => {
        if (res.rows > 0) {
            next();
        } else {
            res.status(404).json({"msg":"Not found"});
        }
        
        console.log('The data from todo table are: \n', rows)
    })
}


module.exports = {get_todo_userin, geteveverythings,get_todo_update, get_one_todo, get_todo_deleted}