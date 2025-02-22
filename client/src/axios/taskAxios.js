// This file sends api request for task resource
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
const TASK_ENDPOINT = "/api/tasks";

// FRONTEND CRUD OPERATION
// Sending Request

// GET | GET all the tasks
export const getTasks = () => {
  const response = axios
    .get(API_BASE_URL + TASK_ENDPOINT)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};

// POST | Create a task
export const createTask = (taskObject) => {
  const response = axios
    .post(API_BASE_URL + TASK_ENDPOINT, taskObject)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};

// DELETE | Delete a task
export const deleteTaskReq = (taskId) => {
  const response = axios
    .delete(API_BASE_URL + TASK_ENDPOINT + `/${taskId}`)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};
