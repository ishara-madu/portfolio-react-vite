import { useEffect, useRef, useState } from 'react';
import Contact from '../../pages/Contact'
import HireBTN from './HireBTN'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



function Links() {
    const [openPopup, setOpenPopup] = useState(false);
    const navbarRef = useRef(null);

    const handlePopup = () => {
        openPopup ? setOpenPopup(false) : setOpenPopup(true)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setOpenPopup(false); // Close the navbar
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [navbarRef]);


    return (
        <>
            <div className='text-white flex justify-end items-center xl:hidden' onClick={handlePopup}>
                {
                    openPopup ? <IoClose className='w-8 h-8' /> : <IoMenu className='w-8 h-8' />

                }
            </div>
            <div className='flex gap-10 items-center hidden xl:flex'>
                <a href='#home' className='text-white relative items-center flex group'>
                    <button className='font-semibold flex h-11 justify-center items-center cursor-pointer'>Home</button>
                    <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                </a>
                <a href='#skills' className='text-white relative items-center flex group'>
                    <button className='font-semibold  flex h-11 justify-center items-center cursor-pointer'>Skills</button>
                    <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                </a>
                <a href='#projects' className='text-white relative items-center flex group'>
                    <button className='font-semibold  flex h-11 justify-center items-center cursor-pointer'>Projects</button>
                    <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                </a>
                <a href="#contact" className='text-white relative items-center flex group'>
                    <button className='font-semibold  flex h-11 justify-center items-center cursor-pointer'>Contact Me</button>
                    <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                </a>

                <HireBTN width={32} height={10} />
            </div>
            {
                openPopup && (
            <div ref={navbarRef} className='flex xl:hidden fixed right-4 top-[90px] w-[180px] justify-center bg-black bg-opacity-90 rounded-xl pb-5'>
                <div className='flex gap-1 items-start flex-col w-[80%]'>
                    <a href='#home' className='text-white relative items-center flex group'>
                        <button className='font-semibold flex h-11 justify-center items-center cursor-pointer'>Home</button>
                        <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                    </a>
                    <a href='#skills' className='text-white relative items-center flex group'>
                        <button className='font-semibold  flex h-11 justify-center items-center cursor-pointer'>Skills</button>
                        <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                    </a>
                    <a href='#projects' className='text-white relative items-center flex group'>
                        <button className='font-semibold  flex h-11 justify-center items-center cursor-pointer'>Projects</button>
                        <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                    </a>
                    <a href="#contact" className='text-white relative items-center flex group'>
                        <button className='font-semibold  flex h-11 justify-center items-center cursor-pointer'>Contact Me</button>
                        <span className='w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 absolute bottom-0 rounded transition-all duration-300 left-[-10px] group-hover:w-full group-hover:left-0'></span>
                    </a>
                    <div className='flex w-full justify-center mt-4'>
                        <HireBTN width={32} height={10} />
                    </div>
                </div>
            </div>
                )
            }
        </>
    )
}

export default Links