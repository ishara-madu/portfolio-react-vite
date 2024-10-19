import React, { useEffect, useState } from 'react';
import HeroLeft from '../components/home/HeroLeft';
import HeroRight from '../components/home/HeroRight';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(false);
    } 
  };

  useEffect(() => {
    if(window.scrollY > 200){
      setIsVisible(false);
    }else{
      setIsVisible(true);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='home' className='flex flex-col justify-center items-center bg-blue-950 h-auto xl:h-svh xl:flex-row overflow-hidden pt-20 xl:p-0'>
      <HeroLeft />
      <HeroRight />
      {isVisible && (
        <div className='fixed animate-alignment flex flex-col justify-center items-center'>
          <span className='flex justify-center border w-7 h-10 rounded-2xl'>
            <div className='flex w-[96%] h-1/2 mt-1 items-center justify-center'>
              <span className='flex w-1 h-2 border rounded animate-alignment'></span>
            </div>
          </span>
        </div>
      )}
    </div>
  );
}

export default Home;
