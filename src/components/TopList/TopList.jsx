import React from 'react'


const FoodData =[
    {
            image: "/images/3.png",
            price: "$10.99",
            name:"Alu Veg",
          dec:"Our delicious blend of tender potatoes and fresh vegetables is seasoned to perfection, bringing warmth and rich flavor to every bite!",
    },
        {
            image: "/images/5.png",
            price: "$10.99",
            name:" Beef Stake",
            dec:"Indulge in the rich, savory flavors of our perfectly grilled beef steak—juicy, tender, and seasoned to perfection for an unforgettable dining experience!",
        },
        {
            image: "/images/4.png",
            price: "$10.99",
            name:"Russian Slad",
            dec:"Enjoy the creamy, refreshing taste of our Russian salad—a delightful mix of crisp vegetables and flavorful dressing, crafted to bring a touch of elegance and freshness to your meal!",
        },



]

const TopList = () => {
  return (
    < div  className='container py-14'>
    {}
    <div className='text-center mb-12'>
        <h1 className='text-3xl font-semibold'> Top List</h1>
        <p>
            Our Top List
        </p>
    </div>
    {}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {FoodData.map((item, index) =>(
            <div
            key={index}
            className='bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300
            '>
                <img
                src={item.image}
                alt=""
                className='w-60 sm:w-40 sm:h-40  mx-auto object-cover rounded-full img-shadow'/>
                <div className='space-y-2'>
                    <p className='text-lg font-semibold '>{item.name}</p>
                 <p>{item.dec}
                 </p>
                  <p className='text-lg font-semibold text-red-500'>{item.price}</p>
                  </div>
</div>
        ))}
    </div>
   </div>
  )
}

export default TopList
