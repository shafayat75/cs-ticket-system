
import Task from '../Task/Task'
// import json from '../../../../public/data.json'

function CustomerTickets({data, inprogressCount, setInprogressCount, taskStatus, setTaskStatus}) {


  return (
   <>
      <h2 className='text-3xl font-medium'>Customer Tickets</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pt-5'>
        {
          data.map(data => <Task key={data.id} data={data} inprogressCount={inprogressCount} setInprogressCount={setInprogressCount}  taskStatus={taskStatus} setTaskStatus={setTaskStatus}></Task>)
        }
      </div>
    </>
  )
}

export default CustomerTickets