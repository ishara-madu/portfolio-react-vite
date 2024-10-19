import React from 'react'
import Box from './Box'
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";



function BottomTop() {
  return (
    <div className='absolute w-[50%] sm:w-[45%] xl:w-48 flex items-center justify-around  h-14 xl:h-96 z-0 sm:top-[30%] right-0 xl:top-auto xl:right-auto bottom-0 sm:bottom-auto xl:bottom-[10%] xl:left-[-25%]' >
        <Box bottom='xl:bottom-[0%] xl:left-0 sm:left-[0%]' icon={FaReact} color='cyan'/>
        <Box bottom='xl:bottom-[30%] xl:left-0 sm:left-[33%]' icon={IoLogoFirebase} color='yellow'/>
        <Box bottom='xl:bottom-[60%] xl:left-0 sm:left-[66%]' icon={SiExpress} color='white'/>
    </div>
  )
}

export default BottomTop