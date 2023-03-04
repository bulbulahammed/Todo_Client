import React, { useState } from 'react';
import "./clock.css";
let time = new Date().toLocaleTimeString();


const Clock = () => {
  const [ctime,setCtime] = useState(time);

  const UpdateTime = ()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(UpdateTime, 1000)
  return (
    <div style={{color:"#FFFFFF"}} className="text-8xl clock">{ctime}</div>
  )
}

export default Clock 