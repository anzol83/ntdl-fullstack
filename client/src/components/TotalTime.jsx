/* eslint-disable react/prop-types */
const TotalTime = (props) => {
    const { taskList, taskType } = props;
    const timeTaken = taskList.reduce((acc, curr) => {
      return acc + parseInt(curr.taskTime);
    }, 0);
    return (
      <>
        {taskType === "entry" && (
          <>
            Total Time Spent: <span>{timeTaken}</span>
          </>
        )}
        {taskType === "unwanted" && (
          <>
            Total Time Wasted: <span>{timeTaken}</span>
          </>
        )}
      </>
    );
  };
  export default TotalTime;