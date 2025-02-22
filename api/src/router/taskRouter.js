import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../model/taskModel.js";

// initializing express router
const taskRouter = express.Router();

// Index ||  GET Tasks
taskRouter.get("/", (req, res) => {
  getTasks()
    .then((tasks) => {
      res.json({
        status: "Success",
        data: tasks,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        error: error.message || "Could not fetch data",
      });
    });
});

// SHOW ||  GET Task
taskRouter.get("/:id", (req, res) => {
  getTask(req.params.id)
    .then((task) => {
      res.json({
        status: "Success",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        error: error.message || "Could not fetch data",
      });
    });
});

// CREATE ||  POST single task
taskRouter.post("/", (req, res) => {
  createTask(req.body)
    .then((task) => {
      res.json({
        status: "Success",
        message: "task created",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error.message || " Could not create data",
      });
    });
});

// UPDATE ||  UPDATE  a task
taskRouter.put("/:id", (req, res) => {
  updateTask(req.params.id, req.body)
    .then((task) => {
      res.json({
        status: "Success",
        message: "task updated",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "Error",
        error: error.message || " Could not update data",
      });
    });
});

// DELETE ||  DELETE a task
taskRouter.delete("/:id", (req, res) => {
  deleteTask(req.params.id)
    .then((task) => {
      res.json({
        status: "Success",
        message: "task deleted",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        error: error.message || "Could not delete data",
      });
    });
});

export default taskRouter;
