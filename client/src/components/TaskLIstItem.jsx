/* eslint-disable react/prop-types */
const TaskListItem = (props) => {
  const { task, switchTaskType, deleteTask } = props;

  // const arrowClass = task.type === "entry" ? "fa-arrow-right-long fa-solid fa-sharp" : "fa-arrow-left-long fa-solid fa-sharp"
  // const arrowButton = task.type === "entry" ? "btn btn-success btn-sm" : "btn btn-warning btn-sm"

  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.timeToComplete}hrs</td>
      <td className="text-end">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(task._id)}
        >
          <i className="fa-trash fa-solid"></i>
        </button>

        {/* <button className={arrowButton} onClick={() => switchTaskType(task.id)}>
          <i className={arrowClass}></i>
        </button> */}
        {/* Conditional Rendering */}
        {/* {condition && <Component />} */}
        {task.type === "Entry" && (
          <button
            className="btn btn-success btn-sm"
            onClick={() => switchTaskType(task._id)}
          >
            <i className="fa-arrow-right-long fa-solid fa-sharp"></i>
          </button>
        )}

        {task.type === "Unwanted" && (
          <button
            className="btn btn-warning btn-sm"
            onClick={() => switchTaskType(task._id)}
          >
            <i className="fa-arrow-left-long fa-solid fa-sharp"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TaskListItem;
