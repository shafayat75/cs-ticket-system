import React from 'react'

function RemovedTask({task}) {
  return (
    <>
        <div className='px-4 py-5 bg-[#E0E7FF] rounded shadow-lg mb-4'>
            <p className='text-2xl font-medium mb-4'>{task.title}</p>
            <p>Completed</p>
        </div>
    </>
  )
}

export default RemovedTask