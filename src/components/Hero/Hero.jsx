import React from 'react'

const Hero = () => {
  return (
    <div >
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
        {}
        <div className='flex flex-col justify-center gap-8  text-center md:text-left pt-24 md:p-0 pb-10'>
        <h1 className='text-4xl font-semibold text-orange-500 lg:text-5xl'>Delisious Food Is Waiting For You</h1>
        <p className='font-semibold'>
        Step into a world where every dish is crafted to perfection, and each bite brings pure joy. Our menu is filled with delicious options, waiting to be savored by you. From rich, comforting flavors to vibrant, fresh ingredients, every meal is an invitation to indulge. So come, relax, and let our food bring warmth and excitement to your table. Your next unforgettable dining experience is just moments away—delicious food is waiting just for you!"

        </p>
        <div className='flex gap-4 items-center md:justify-start  justify-center'>
            <button  className='primary-btn hover:scale-105 duration-200'>
                Food Menu
            </button>
            <button className='secondary-btn text-black hover:scale-105 duration-200'>
                Book Table
            </button>
        </div>
      </div>
      {}
      <div className='flex flex-col justify-center'>
        <img src="/images/1.png" alt=" 1image" className=' animate-spin-slow img-shadow w-[400px] mx-auto '/>
      </div>
      </div>
    </div>
    
  )
}

export default Hero
