const express = require("express")
const router = express.Router()

// authentication module
const auth = require("../auth/auth")

// controllers modules
const task_controller = require("../controllers/taskController")

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended: true}))


router.route("/")

.get(auth, task_controller.task_list)


router.route("/create")

.get(auth, task_controller.task_create_get)

.post(auth, task_controller.task_create_post)


router.route("/:taskId")

.get(auth, task_controller.task_by_id)

.delete(auth, task_controller.task_delete)

.put(auth, task_controller.task_update_put)

module.exports = router

