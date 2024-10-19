import React, { useState } from 'react'
import HeroLeft from '../components/skills/HeroLeft'
import HeroRight from '../components/skills/HeroRight'

function Skills() {
  const [boxId,setBoxID]= useState(0);

  const handleBoxId = (id)=>{
    setBoxID(id);
  }
  return (
    <div id='skills' className='flex justify-end items-center gap-10 bg-blue-950 h-auto xl:h-[620px] flex-col pt-20'>
      <div className="w-full h-auto flex">
        <div className="w-full xl:w-2/4 h-auto justify-center xl:justify-center flex">
          <div className="w-3/4 justify-start xl:justify-start h-auto flex">
            <h2 className="text-white font-semibold text-2xl">Technical Proficiency</h2>
          </div>
        </div>
      </div>

      <div className='flex h-auto w-full xl:flex-row flex-col'>
        <HeroLeft boxId={handleBoxId} />
        <HeroRight boxId={boxId} />
      </div>


    </div>
  )
}

export default Skills