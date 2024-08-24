import React from 'react'
import profile from "../Images/images.png"
import { FaCirclePlus } from "react-icons/fa6";
import "./Status.css"

function Status() {
  return (
    <div>
        <div className="AllStatus">
            <div>
                <img className="status" src={profile} alt="" />
                <FaCirclePlus className='plus'/>
                <p className='name'>Your Story</p>
            </div>
            <img className="status" src={profile} alt="" />
            <img className="status" src={profile} alt="" />
            <img className="status" src={profile} alt="" />
        </div>
    </div>
  )
}

export default Status
