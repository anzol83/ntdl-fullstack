/* eslint-disable react/prop-types */
import { useState } from "react";
import { generateRandomId } from "../utility/generateRandomId";

const AddTaskForm = (props) => {
  const { setTaskList } = props
  
  const [taskName, setTaskName] = useState("")
  const [taskTime, setTaskTime] = useState("")

  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    // STEP 1: Build the task object
    const taskObject = {
      taskName: taskName,
      taskTime: taskTime,
      type: "entry",
      id: generateRandomId(),
    }

    setTaskList((prevState) => [...prevState, taskObject])
    // setTaskList([...taskList, taskObject])
    setTaskName("")
    setTaskTime("")
  }

  // Handle task name input change
  const handleOnTaskNameChange = (e) => {
    const inputValue = e.target.value

    setTaskName(inputValue)
  }

  const handleOnTaskTimeChange = (e) => {
    const inputValue = e.target.value

    setTaskTime(inputValue)
  }

  
  return ( 
    <form onSubmit={handleOnSubmit}>
      <div className="d-flex flex-column gap-4">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter task name"
          name="taskName"
          onChange={handleOnTaskNameChange}
          value={taskName}
          required
        />

        <input 
          type="number" 
          className="form-control" 
          placeholder="Enter time spent in hrs"
          name="taskTime"
          min="1"
          max="24"
          onChange={handleOnTaskTimeChange}
          value={taskTime}
          required
        />

        <button 
          className="btn btn-primary" 
          type="submit"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
 
export default AddTaskForm;