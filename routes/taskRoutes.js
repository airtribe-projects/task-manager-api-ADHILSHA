const express = require("express")
const router = express.Router();
const fs = require("fs")
const tasksData = fs.readFileSync("task.json")
let tasks = JSON.parse(tasksData).tasks
router.get("/",(req,res)=>{
    return res.json(tasks)
})
module.exports = router;