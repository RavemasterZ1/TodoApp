const connection = require('../../config/db');
const jwt = require('jsonwebtoken');

const geteverybody = (res,id) => {
    connection.query('SELECT * from user', (err, rows) => {

        if (!err) {
            res.status(200)
            res.send(rows)
           
        } else {
            console.log(err)
            
        }
        console.log('The data from user table are: \n', rows)
    })
}

const getuserin = (res, email, name, firstname, password) => {
    connection.query('INSERT INTO `user` (`email`,`name`, `firstname`, `password`) VALUES (?,?,?,?)', [email, name, firstname, password], (err, rows) => {
        if (!err) {
            res.status(200)
            res.send(`Beer with the record ID has been added.`)
        } else {
            console.log(err)
        }
        console.log('The data from user table are:11 \n', rows)

        })
}
const get_alluser = (res,id)=>{
    connection.query('select * from todo WHERE user_id = 4', (err, rows) => {

        if (!err) {
            res.status(200)
            res.send(rows)
        } else {
            console.log(err)
        }
    
        console.log('The data from user table are: \n', rows)
    })
} 

const getall2 = (res,id) => {
    connection.query('select name, firstname, email FROM user WHERE id = 25', (err, rows) => {

        if (!err) {
            res.status(200)
            res.send(rows)
        } else {
            console.log(err)
        }

        // if(err) throw err
        console.log('The data from user table are: \n', rows)
    })
}

const callback2 = (nbr, res)=> {
    if (nbr == 84) {
        res.status(409).json({"msg":"account already exist"});
    }
    return;
};

const check_account = (res,email) => {

    connection.query('SELECT * FROM `user` WHERE email = ?', [email], (err, rows) => {
        
        if (rows.length > 0) {
            callback2(84, res);
        } else {
            callback2(0, res);
        }

        // if(err) throw err
        console.log('The data from beer table are: \n', rows)
    })
}

const callback = (nbr, res)=> {
    if (nbr == 84) {
        res.status(401).json({"msg":"Invalid Credentials"});
    }
    return;
};
const get_login = (res, email, password, bcrypt) => {
    connection.query('SELECT password, id FROM `user` WHERE email = ?', [email] , (err, rows) => {
        if (rows.length > 0) {
            var password2 = rows[0].password;
            var id2 = rows[0].id;
            if (bcrypt.compareSync(password, password2)) {
                const token = jwt.sign({email:email, id:id2}, process.env.SECRET);
                res.json({token});
                console.log("You are connected")
                callback(0, res);
            } else {
                callback(84, res);
            }
        } else {
            callback(84, res);
        }
    })
}

const getinsert = (res, name, email, firstname, password, id) => {
connection.query('UPDATE user SET name = ?, set email = ?, firstname = ?, set password = ? WHERE id = ?', [name, email, firstname, password, id] , (err, rows) => {

    if(!err) {
        res.status(200)
        res.send(`User with the name: ${name} has been added.`)
    } else {
        console.log(err)
    }

})
}

const getdeleted = (res, id) => {
    connection.query('DELETE FROM user WHERE id = ?', [id], (err, rows) => {
        if (!err) {
            res.status(200).json({"msg":`succesfully deleted record number: ${id}`})
        } else {
            console.log(err)
        }
        
        console.log('The data delete from user table are: \n', rows)
    })
}


module.exports = {getuserin, geteverybody,get_alluser, getall2, getinsert, getdeleted, check_account, get_login, callback2}