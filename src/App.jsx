import './App.css'
import CustomerTickets from './assets/components/CustomerTickets/CustomerTickets'
import Inprogress from './assets/components/Inprogress/Inprogress'
import Navbar from './assets/components/Navbar/Navbar'
import Resolved from './assets/components/Resolved/Resolved'
import ResolvedTask from './assets/components/ResolvedTask/ResolvedTask'
import TaskStatus from './assets/components/TaskStatus/TaskStatus'
import Footer from './assets/components/Footer/Footer'
import { useState,useEffect } from 'react'
import { ToastContainer } from 'react-toastify';


function App() {
  
  const [inprogressCount, setInprogressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedStatus, setRessolvedStatus] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // console.log("fetching data...");
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-[1440px] mx-auto mt-10 mb-10 lg:flex md:justify-between gap-4'>
        <Inprogress inprogressCount={inprogressCount}></Inprogress>
        <Resolved resolvedCount={resolvedCount}></Resolved>
      </div>
      <div className='max-w-[1440px] mx-auto space-y-5 md:grid md:grid-cols-4 gap-4 mb-10'>
        <div className='md:col-span-2 lg:col-span-3'>
          <CustomerTickets data={data} inprogressCount={inprogressCount} setInprogressCount={setInprogressCount} taskStatus={taskStatus} setTaskStatus={setTaskStatus}></CustomerTickets>
        </div>
        <div className='md:col-span-2 lg:col-span-1 space-y-5'>
          <TaskStatus taskStatus={taskStatus} setTaskStatus={setTaskStatus} inprogressCount={inprogressCount} setInprogressCount={setInprogressCount} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} resolvedStatus={resolvedStatus} setRessolvedStatus={setRessolvedStatus} data={data} setData={setData}></TaskStatus>
          <ResolvedTask resolvedStatus={resolvedStatus}></ResolvedTask>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
