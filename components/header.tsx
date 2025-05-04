import React from 'react'
import Searchbox from './searchbox'

const Navbar = () => {
  return (
    <div className='w-full h-16 fixed z-100 bg-neutral-900/40 backdrop-blur-lg border-b-1 border-neutral-400/40 text-2xl items-center flex justify-between px-8'>
      <h1>BetterBoxd</h1>
      <Searchbox/>
      </div>
  )
}

export default Navbar