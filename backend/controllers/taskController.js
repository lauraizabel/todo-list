const db = require("../models/pool")

//retorna todas as tasks
exports.task_list = (req, res) => {
    const userId = req.params.userId
    db("tasks").where("user_author", userId).then(data => {
        res.send(data)
    })
}

//rota página de criação de task
exports.task_create_get = (req, res) => {
    res.send("Página de criação de task")
}

//cria uma task usando POST form
exports.task_create_post = (req, res) => {
    const userId = req.params.userId
    console.log(req.params)

    const taskTitle = req.body.title
    const taskDescription = req.body.description

    db("tasks").insert({
        title: taskTitle,
        description: taskDescription,
        status: false,
        user_author: userId
    }).then(() => {
        res.send("success")
    }).catch(err => {
        console.log(err)
    })
}

//retorna task especifica - usa o id
exports.task_by_id = (req, res) => {
    const taskId = req.params.taskId
    const userId = req.params.userId

    db("tasks").where({
        task_id: taskId,
        user_author: userId
    }).first().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
}

//deleta task
exports.task_delete = (req, res) => {
    const taskId = req.params.taskId
    const userId = req.params.userId

    db("tasks").where({
        task_id: taskId,
        user_author: userId
    }).del().then(() => {
        res.send("success")
    }).catch(err => {
        console.log(err)
    })
}

// Atualiza task (put) usando form
exports.task_update_put = (req, res) => {
    const taskId = req.params.taskId
    const userId = req.params.userId

    const taskTitle = req.body.title
    const taskDescription = req.body.description
    const taskStatus = req.body.status

    db("tasks").where({
        task_id: taskId,
        user_author: userId
    }).update({
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        user_author: userId
    }).then(() => {
        res.send("success")
    }).catch(err => {
        console.log(err)
    })
}
