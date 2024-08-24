import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import "./HomeTop.css";


function HomeTop() {
  return (
    <div>
        <h1 className='Heading'>Instagram</h1>
        <div className='icons'>
            <FaRegHeart />
            <PiTelegramLogo />
        </div>
    </div>
  )
}

export default HomeTop
