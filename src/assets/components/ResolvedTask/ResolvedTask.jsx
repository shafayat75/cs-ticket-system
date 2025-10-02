import React from 'react'
import RemovedTask from '../RemovedTask/RemovedTask'

function ResolvedTask({ resolvedStatus}) {
  return (
    <div className='bg-white p-4 rounded'>
      <p className='text-2xl font-medium mb-4'>Resolved Task</p>
      {
        resolvedStatus.map(task => <RemovedTask key={task.id} task={task}></RemovedTask>)
      }
    </div>
  )
}

export default ResolvedTask