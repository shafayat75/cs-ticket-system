import {toast} from 'react-toastify';
import React from "react";


function Task({ data,inprogressCount, setInprogressCount, taskStatus, setTaskStatus}) {
  // console.log(data, inprogressCount, setInprogressCount);
  const handleCardClick = () => {
      const arr = [...taskStatus];
      const newArr = arr.filter(task => task.id!==data.id);
      newArr.push(data)
      if(inprogressCount===0 || !arr.includes(data))
      {
        toast("In Progress");
        setInprogressCount(inprogressCount+1);
        setTaskStatus(newArr);
      }
    }
  return (
    <div onClick={() => handleCardClick()} className="bg-white p-4 space-y-3 shadow-md rounded-xl">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{data.title}</h2>
        <p className="px-6 bg-green-300 rounded-2xl">Open</p>
      </div>
      <p className="text-xl">{data.description}</p>
      <div className="flex justify-between">
        <div className="flex gap-4">
            <p className="text-xl font-medium">#{data.id}</p>
            <p className="text-xl">{data.priority}</p>
        </div>
        <div className="flex items-center gap-4">
            <p className="text-xl font-medium">{data.customer}</p>
            <p>{data.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
