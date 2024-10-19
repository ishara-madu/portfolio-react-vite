import React from 'react'


function Box(props) {
  return (
    <>
    <span className={`w-12 h-12 sm:w-20 sm:h-20 2xl:w-16 2xl:h-16 bg-transparent border-2 border-blue-600 sm:absolute rounded-xl flex justify-center items-center group cursor-pointer ${props.left} ${props.bottom}`}>
        {<props.icon className='group-hover:mb-3 group-hover:w-12 duration-200' style={{width:"60%",height:"60%",color:props.color,backgroundColor:props.bg}} />}
    </span>
    </>
  )
}

export default Box