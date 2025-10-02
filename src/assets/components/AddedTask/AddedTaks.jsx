import React from "react"
import {toast} from 'react-toastify';

function AddedTask({task, taskStatus, setTaskStatus, inprogressCount, setInprogressCount ,resolvedCount, setResolvedCount, resolvedStatus, setRessolvedStatus, data, setData }){

    const handleComplete = () => {
        let arr = [...taskStatus];
        let newArr = arr.filter(el => el.id!==task.id);
        toast("Task Resolved");
        setInprogressCount(inprogressCount-1);
        setTaskStatus(newArr);
        setResolvedCount(resolvedCount+1);
        arr = [...resolvedStatus, task];
        setRessolvedStatus(arr);
        arr = [...data];
        newArr = arr.filter(el => el.id !== task.id)
        setData(newArr);
    }

    return(
        <div className='bg-[#f2efef] px-3 py-4 rounded shadow-lg mb-4'>
        <p className='text-xl font-medium mb-4'>{task.title}</p>
        <button onClick={() => handleComplete()} className='w-full py-3 rounded text-white text-xl font-semibold bg-[#02A53B]'>Complete</button>
        </div>
    );
}

export default AddedTask