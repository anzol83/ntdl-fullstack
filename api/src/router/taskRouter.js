import express from 'express'
import { createTask, deleteTask, getTasks } from '../model/taskModel.js'

// Initializing express router
const taskRouter = express.Router()

// Index | Get all Tasks
taskRouter.get("/", (req, res) => {
    getTasks()
    .then(tasks => {
        res.json({
            status: "success",
            data: tasks
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not fetch task'
        })
    })

})

// Show| Get single Task
taskRouter.get("/:id", (req, res) => {
    getTask(req.params.id)
    .then(task => {
        res.json({
            status: "success",
            data: tasks
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not fetch task'
        })
    })
})

// Show | Post Single Task
taskRouter.post("/", (req, res) => {
    const taskObject = req.body

    createTask(taskObject)
    .then(task => {
        res.json({
            status: "success",
            message: "Task Created",
            data: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not create task'
        })
    })

})

// Update | Patch single Task
taskRouter.patch("/:id", (req, res) => {
    const updatedTaskObject = req.body
    const id = req.params.id

    updateTask(updatedTaskObject)
    .then(task => {
        res.json({
            status: "success",
            message: "Task Updated",
            data: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not update task'
        })
    })
})


//  Delete | Delete Tasks
taskRouter.delete("/:id", (req, res) => {
    deleteTask(req.params.id)
    .then(task => {
        res.json({
            status: "success",
            message: "task deleted",
            data: task
        })
    })
    .catch(error => {
        res.json({
            status: "error",
            error: error.message || 'Could not delete task'
        })
    })

})

export default taskRouter