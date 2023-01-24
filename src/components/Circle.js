import React from 'react'
import './Circle.css';

export default function Circle() {
    const handleEnter1=()=>{
        document.getElementById('circleMain').className=" circleOuter a1 "
    }
    const handleEnter2=()=>{
        document.getElementById('circleMain').className=" circleOuter a2 "
    }
    const handleEnter3=()=>{
        document.getElementById('circleMain').className=" circleOuter a3 "
    }
    const handleEnter4=()=>{
        document.getElementById('circleMain').className=" circleOuter a4 "
    }
  return (
    <div className="circleCont">
        <div id='circleMain' className='circleOuter a1'>
        <div className="workItems" onMouseEnter={handleEnter1}>Work1</div>
        <div className="workItems" onMouseEnter={handleEnter2}>Work 2</div>
        <div className="workItems" onMouseEnter={handleEnter3}>Work 3</div>
        <div className="workItems" onMouseEnter={handleEnter4}>Work 4</div>
    </div>
    </div>
  )
}
