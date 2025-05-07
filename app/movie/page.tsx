import Image from 'next/image'
import React from 'react'

const Movie = () => {
  return (
    <div className="bg-gradient-to-l from-neutral-900 to-neutral-900 min-h-screen flex flex-col items-center py-24"> 
    <div className='w-7xl mx-auto h-1/2 rounded-md bg-neutral-800 absolute justify-items-center object-fill bg-im '>
      <h1 className='absolute items-center '>Welcome to <span className='font-bold text-2xl'>BetterBoxd.</span></h1>

      {/* <Image
                src="https://m.media-amazon.com/images/M/MV5BMTc1NDg5MTMzOV5BMl5BanBnXkFtZTcwNjEzNzIwNA@@._V1_.jpg"
                alt= "Heat"
                layout="fill"
                objectFit="cover"
                className=""
                
            /> */}

    </div>
    </div>

    
  )
}

export default Movie
