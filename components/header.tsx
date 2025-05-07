import React from 'react'
import Searchbox from './searchbox'

const Navbar = () => {
  return (
    
    <div className='p-4 fixed w-full top-0 z-100 rounded-full'>

    <div className='w-5xl mx-auto py-4 rounded-full bg-neutral-900/40 backdrop-blur-lg border-1 text-2xl flex items-center justify-between px-8 '>
      <h1>BetterBoxd</h1>
      <Searchbox/>
      </div>
    
    </div>
  )
}

export default Navbar