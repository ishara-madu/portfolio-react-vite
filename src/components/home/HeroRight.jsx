import React from 'react'
import BottomTop from './rectangles/BottomTop'
import LeftRight from './rectangles/LeftRight'
import owner from '../../assets/owner.jpg'

function HeroRight() {
  return (
    <div className='flex xl:w-2/4 w-full xl:h-full h-[500px] sm:h-[550px] items-center xl:items-center justify-center'>
      <span className='h-[90%] w-[100%] xl:h-[500px] xl:w-[500px] relative group-hover:mb-5'>
        <span className='absolute bg-transparent h-full w-full z-10 imgwrap duration-300'></span>
        <span className='w-full pb-20 sm:p-0 sm:w-[50%] xl:w-full h-full flex overflow-hidden relative justify-center items-center rounded-3xl imgcontent duration-300'>
        <span className='w-[90%] xl:w-full h-full flex overflow-hidden relative justify-center items-center rounded-3xl imgcontent duration-300'>
          <img src={owner} alt="" className='absolute rounded-3xl z-0' style={{ width: "auto", height: "auto" }} />
        </span>
        </span>
        <BottomTop />
        <LeftRight />
      </span>

    </div>
  )
}

export default HeroRight