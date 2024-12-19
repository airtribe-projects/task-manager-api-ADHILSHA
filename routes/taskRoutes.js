const express = require("express");
const router = express.Router();
const fs = require("fs");
const tasksData = fs.readFileSync("task.json");
let tasks = JSON.parse(tasksData).tasks;
//to get all tasks
router.get("/", (req, res) => {
  if(!tasks || !tasks.length){
    res.status(404).json({error:"Task not found"})
  }
  res.json(tasks);
});
//to post a new task
router.post("/", (req, res) => {
  const { title, description, completed } = req.body;
  if (!title || !description || typeof completed !== "boolean" ) {
    res.status(400).json({ error: "Invalid Input" });
  }
  const task = {
    title: title,
    description: description,
    completed: completed,
  };
  tasks.push(task);
  res.status(201).json(task);
});
//to get individual tasks by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  let task = tasks.find((task) => task.id == id);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});
//to update a task
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;
  if (!title || !description || typeof completed !== "boolean" ) {
    res.status(400).json({ error: "Invalid Input" });
  }
  let task = tasks.find((task) => task.id == id);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  }
  task.title = title;
  task.description = description;
  task.completed = completed;
  res.json(task);
});
//to delete a task
router.delete("/:id",(req,res)=>{
    const id = req.params.id;
    const taskIndex = tasks.findIndex((task)=>task.id==id)
    if(taskIndex===-1){
        res.status(404).json({error:"Task not found"})
    }
    tasks.splice(taskIndex,1)
    res.json("Task Deleted")
})
module.exports = router;
