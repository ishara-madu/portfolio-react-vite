import React from 'react'
import contactData from "../../data/contact.json"

function HireBTN(props) {
  return (
    <a href={contactData.hireLink} target='_blank'>
    <button className={`w-${props.width} h-${props.height} bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-md font-semibold hover:bg-none group`}><div className='flex w-full h-full justify-center items-center rounded-md bg-none group-hover:bg-black group-hover:border-blue-600 group-hover:border duration-[2s]'>Hire Me</div></button>
    </a>
  )
}

export default HireBTN