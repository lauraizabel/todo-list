const express = require("express")
const router = express.Router()

// controllers modules
const task_controller = require("../controllers/taskController")

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended: true}))

//db.connect()

router.route("/")

.get(task_controller.task_list)

.post(task_controller.task_create_post)


router.route("/:id")

.get(task_controller.task_by_id)

.delete(task_controller.task_delete)

.put(task_controller.task_update_put)

module.exports = router