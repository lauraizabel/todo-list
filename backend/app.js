const express = require("express")
const bodyParser = require("body-parser")
const tasks = require("./routes/tasks")
const user = require("./routes/user")
//const db = require("../models/pool")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use("/user", user)
app.use("/user/tasks", tasks)

app.listen(3000, () => {
  console.log("Running on port 3000.")
})