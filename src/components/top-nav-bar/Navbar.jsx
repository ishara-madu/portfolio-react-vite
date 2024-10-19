import React from 'react'
import Logo from './Logo'
import Links from './Links'

function Navbar() {
  return (
    <div className='flex h-20 bg-opacity-30 bg-black justify-between items-center px-5 xl:px-16 fixed w-full z-30'>
      <Logo />
      <Links />

    </div>
  )
}

export default Navbar