import React from "react";
import vector1 from "../../vector1.png";

function Inprogress({inprogressCount}) {
  return (
    <div className="flex-1 flex text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
      <img className="w-1/3" src={vector1} alt="" />
      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-xl">Inprogress</p>
        <p className="text-4xl font-bold">{inprogressCount}</p>
      </div>
      <img className="w-1/3 transform scale-x-[-1]" src={vector1} alt="" />
    </div>
  );
}

export default Inprogress;
