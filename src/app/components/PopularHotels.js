import React from 'react'
import PopularHotelCard from './PopularHotelCard'

const PopularHotels = () => {
  const hotels = [
    {
      img:"hotel-1.jpeg",
      location:"London NW8 7JT England",
      name:"Danubius Hotel Regents Park",
      price:"$200 Par Night",
      rate:4.8
    },
    {
      img:"hotel-2.jpeg",
      location:"London NW8 7JT England",
      name:"The Resident Soho",
      price:"$200 Par Night",
      rate:4.8
    },
    {
      img:"hotel-3.jpeg",
      location:"London NW8 7JT England",
      name:"London Bridge Hotel",
      price:"$200 Par Night",
      rate:4.8
    }
  ]
  return (
    <div className='mt-[5rem]'>
      <h2 className='font-semibold text-[1.7rem] lg:text-[2.5rem]'>Our most popular Hotels</h2>
      <div className='lg:flex justify-between'>

        <p className='text-[1rem]  text-[#555555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='bg-[#24AB701A] text-[#24AB70] border rounded-full w-[5rem] h-[2rem] mt-3 lg:mt-0'>View All</button>
      </div>


      <div className="main-grid lg:flex flex-row gap-5 lg:gap-5 mt-[3rem]">
      
        {hotels.map((hotel,index)=>{
          return(

            <PopularHotelCard
            key={index}
            img={hotel.img}
            location={hotel.location}
            name={hotel.name}
            price={hotel.price}
            rate={hotel.rate}/>
            )
        })}
      </div>
    </div>
  )
}

export default PopularHotels