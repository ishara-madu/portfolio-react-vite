import React from 'react'
import Box from './Box'
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";




function LeftRight() {
  return (
    <div className='absolute w-[50%] sm:w-[45%] xl:w-80 h-14 xl:h-20 flex items-center justify-around sm:right-0 xl:right-auto sm:top-[60%] xl:top-auto bottom-0 sm:bottom-auto xl:bottom-[-20%]'>
        <Box left='left-[0%] xl:left-[-10%]'icon={FaNodeJs} color='green'/>
        <Box left='left-[33%] xl:left-[28%]'icon={FaHtml5} color='#f97316'/>
        <Box left='left-[66%]'icon={FaCss3Alt} color='blue'/>
        
    </div>
  )
}

export default LeftRight