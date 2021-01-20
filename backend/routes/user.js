const express = require("express")
const router = express.Router()

// authentication module
const auth = require("../auth/auth")

// controllers modules
const user_controller = require("../controllers/userController")

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended: true}))



//login
router.route("/login")

.get(user_controller.user_login_get)

.post(user_controller.user_login_post)

//logout
router.route("/logout")

.post(auth, user_controller.user_logout_post)

//registration
router.route("/register")

.get(user_controller.user_register_get)

.post(user_controller.user_register_post)

//page of user
router.route("/profile")

.get(auth, user_controller.user_page_get)

.delete(auth, user_controller.user_page_delete)


module.exports = router

