import React from 'react'
import AddedTask from '../AddedTask/AddedTaks';

function TaskStatus({ taskStatus, setTaskStatus, inprogressCount, setInprogressCount ,resolvedCount, setResolvedCount, resolvedStatus, setRessolvedStatus, data, setData }) {
  // console.log(taskStatus);
  return (
    <div className='bg-white p-4 rounded'>
      <p className='text-2xl font-medium mb-4'>Task Status</p>
      {taskStatus.map(task => <AddedTask key={task.id} task={task} taskStatus={taskStatus} setTaskStatus={setTaskStatus} inprogressCount={inprogressCount} setInprogressCount={setInprogressCount} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} resolvedStatus={resolvedStatus} setRessolvedStatus={setRessolvedStatus} data={data} setData={setData}></AddedTask>)}
    </div>
  );
}

export default TaskStatus