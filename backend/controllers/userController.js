const db = require("../models/pool")

exports.user_login_get = (req, res) => {
    res.send("LOGIN PAGE")
}

exports.user_login_post = (req, res) => {
    res.send("LOGIN POST AND AUTH")
}

exports.user_register_get = (req, res) => {
    res.send("REGISTRATION PAGE")
}

//Add new user
exports.user_register_post = (req, res) => {
    const userName = req.body.name
    const userEmail = req.body.email
    const userPassword = req.body.password

    db("users").insert({
        name: userName,
        email: userEmail,
        password: userPassword
    }).then(() => {
        res.send("success")
    }).catch(err => {
        console.log(err)
    })
}

exports.user_page_get = (req, res) => {
    const userId = req.params.userId

    db("users").where("user_id", userId).first().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
}

exports.user_page_delete = (req, res) => {
    const userId = req.params.userId
    db("users").where("user_id", userId).del().then(data => {
        res.send("sucess")
    }).catch(err => {
        console.log(err)
    })
}
