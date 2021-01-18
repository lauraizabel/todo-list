const express = require("express")
const router = express.Router()

// controllers modules
const user_controller = require("../controllers/userController")

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended: true}))

//login (redirect)
router.route("/")

.get(user_controller.user_login_get)

.post(user_controller.user_login_post)

//registration
router.route("/register")

.get(user_controller.user_register_get)

.post(user_controller.user_register_post)

//page of user
router.route("/:userId")

.get(user_controller.user_page_get)

.delete(user_controller.user_page_delete)


module.exports = router

