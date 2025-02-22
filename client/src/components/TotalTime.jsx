/* eslint-disable react/prop-types */
const TotalTime = (props) => {
  const { taskList, taskType } = props;

  const timeTaken = taskList.reduce((acc, curr) => {
    return acc + parseInt(curr.timeToComplete);
  }, 0);

  return (
    <>
      {taskType === "Entry" && (
        <>
          Total Time Spent: <span>{timeTaken}</span>
        </>
      )}

      {taskType === "Unwanted" && (
        <>
          Total Time Wasted: <span>{timeTaken}</span>
        </>
      )}
    </>
  );
};

export default TotalTime;