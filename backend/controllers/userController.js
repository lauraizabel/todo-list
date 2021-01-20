require("dotenv").config()
const db = require("../models/pool")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const saltRounds = 10

exports.user_login_get = (req, res) => {
    res.send("LOGIN PAGE")
}

// Login - authentication
exports.user_login_post = (req, res) => {
    const userEmail = req.body.email
    const userPassword = req.body.password

    db("users").where("email", userEmail).first().then(data => {
        if (data === undefined || data.length === 0) {
            return res.status(404).json({
                error: true,
                message: "this email is not registered"
            })
        } 
        
        bcrypt.compare(userPassword, data.password, function(err, result) {
            if (result === true) {
                const id = data.user_id
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 900 // 15min
                })
    
                return res.status(200).json({ auth: true, token: token })
            } else {
                res.status(401).json({
                    error: true, message: 'Login inválido!'
                });
            }
        });
    }).catch(err => {
        console.log(err)
    })
}

exports.user_logout_post = (req, res) => {
    return res.json({ auth: false, token: null })
}

exports.user_register_get = (req, res) => {
    res.send("REGISTRATION PAGE")
}

//Add new user
exports.user_register_post = (req, res) => {
    const userName = req.body.name
    const userEmail = req.body.email
    var userPassword = req.body.password

    bcrypt.hash(userPassword, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: true, message: 'error due registration, try again later'
            });
        } else {
            db("users").insert({
                name: userName,
                email: userEmail,
                password: hash
            }).then(() => {
                res.send("success")
            }).catch(err => {
                console.log(err)
            })
        }
    });
}

exports.user_page_get = (req, res) => {
    const userId = req.userId

    db("users").where("user_id", userId).first().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
}

exports.user_page_delete = (req, res) => {
    const userId = req.userId
    db("users").where("user_id", userId).del().then(data => {
        res.send("sucess")
    }).catch(err => {
        console.log(err)
    })
}
