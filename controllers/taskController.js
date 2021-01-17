const db = require("../models/pool")

//retorna todas as tasks
exports.task_list = (req, res) => {
    db.query("SELECT * FROM tasks", (err, response) => {
        if (err) {
            res.send(err)
        }
        res.send(response.rows)
    })
}

//retorna task especifica - usa o id
exports.task_by_id = (req, res) => {
    const taskId = req.params.id

    db.query("SELECT * FROM tasks WHERE id = $1", [taskId], (err, response) => {
        if (err) {
            console.log(err)
        }
        res.send(response.rows)
    })
}

//cria uma task usando POST form
exports.task_create_post = (req, res) => {
    const taskTitle = req.body.title
    const taskDescription = req.body.description

    const taskQuery = {
        text: "INSERT INTO tasks (title, description, status) VALUES($1, $2, $3)",
        values: [taskTitle, taskDescription, false]
    }

    db.query(taskQuery, (err, response) => {
        if (err) {
            console.log(err)
        } else {
            res.send(response.rows)
        }
    })
}

//deleta task usando POST form
exports.task_delete = (req, res) => {
    const taskId = req.params.id

    db.query("DELETE FROM tasks WHERE id = $1", [taskId], (err, response) => {
        if (err) {
            console.log(err)
        } else {
            res.send("sucess")
        }
    })
}

// Atualiza task (put) usando form
exports.task_update_put = (req, res) => {
    const taskId = req.params.id

    const taskTitle = req.body.title
    const taskDescription = req.body.description
    const taskStatus = req.body.status

    const taskQuery = {
        text: "UPDATE tasks SET title=$1, description=$2, status=$3 WHERE id=$4",
        values: [taskTitle, taskDescription, taskStatus, taskId]
    }

    db.query(taskQuery, (err,response) => {
        if (err) {
            console.log(err)
        }
        res.send(response.rows)
    })
}
