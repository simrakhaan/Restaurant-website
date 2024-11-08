import React from 'react'

const Banner = () => {
  return (
    < div >
    <div className='container py-14 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex justify-center items-center'>
            <img src="/images/2.png" alt="2png" />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold text-orange-600'>Food Is Always Good</h1>
                <p className='py-4 font-semibold'>"At our place, great food is always on the menu—where every dish is crafted with care, ensuring every bite is a delicious experience you’ll always cherish!".</p>

            </div>
            </div>
      
    </div>
    </div>
  )
}

export default Banner
