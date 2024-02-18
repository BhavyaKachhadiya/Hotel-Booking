"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopularHotelCard from './PopularHotelCard';
import Link from 'next/link';

const PopularHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularHotels = async () => {
      setTimeout(() => {
        setIsLoading(false);
        
      }, 3000);
      setError(null); // Reset error on each fetch

      try {
        const response = await axios.get('https://codex-hotel-booking-backend.vercel.app/api/v1/hotels/popular');
        setHotels(response.data);
      } catch (error) {
        setError('Error fetching hotels: ' + error.message);
      } 
    };
    console.log('isLoading before fetching:', isLoading);
    fetchPopularHotels();
  }, []); // Fetch data on component mount

  return (
    <div className='mt-[5rem]'>
      <h2 className='font-semibold text-[1.7rem] lg:text-[2.5rem]'>Our most popular Hotels</h2>
      <div className='lg:flex justify-between items-center'>
        <p className='text-[1rem]  text-[#555555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link href={"/hotels"} className='bg-[#24AB701A] text-[#24AB70] border rounded-full w-[5rem] h-[2rem] mt-3 lg:mt-0 flex justify-center items-center'>View All</Link>
      </div>

      

        {error && <p className="error-message">{error}</p>}

        {isLoading ? <div>
<div className="main-grid lg:flex flex-row gap-5 lg:gap-5 mt-[1rem]">

          <div className=" animate-pulse card border-0 rounded-2xl md:w-[25rem] w-[21rem] overflow-hidden h-[30rem] bg-[#FAFAFA] mt-10 ">
    <div className='img w-[25rem] h-[20rem] bg-gray-300'>
    </div>
    <div className='px-4'> 
      <div className="top">
        <p className='text-[.75rem] mt-[1.5rem] bg-gray-200 w-[15rem] h-[1.5rem] text-[#24AB70]'></p>
      </div>
      <div className="mid">
        <p className='md:text-[1.5rem] text-[1rem] mt-[.5rem] bg-gray-200 h-[2rem] w-[20rem] font-semibold'></p>
      </div>
      <div className="bottom mt-4 md:mt-[2rem]">
        <div className="flex gap-5 justify-start items-center">
          <span className='w-[7rem] h-[1.5rem] bg-gray-200'></span>
          <div className='line'>
            <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#DDDDDD" />
            </svg>

          </div>
          <div className="rate flex items-center">
            <div className='flex gap-3 w-[10rem] h-[1.5rem] bg-gray-200'>
              
            </div>
            <div><p className='ml-3'></p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
          <div className=" animate-pulse card border-0 rounded-2xl md:w-[25rem] w-[21rem] overflow-hidden h-[30rem] bg-[#FAFAFA] mt-10 ">
    <div className='img w-[25rem] h-[20rem] bg-gray-300'>
    </div>
    <div className='px-4'> 
      <div className="top">
        <p className='text-[.75rem] mt-[1.5rem] bg-gray-200 w-[15rem] h-[1.5rem] text-[#24AB70]'></p>
      </div>
      <div className="mid">
        <p className='md:text-[1.5rem] text-[1rem] mt-[.5rem] bg-gray-200 h-[2rem] w-[20rem] font-semibold'></p>
      </div>
      <div className="bottom mt-4 md:mt-[2rem]">
        <div className="flex gap-5 justify-start items-center">
          <span className='w-[7rem] h-[1.5rem] bg-gray-200'></span>
          <div className='line'>
            <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#DDDDDD" />
            </svg>

          </div>
          <div className="rate flex items-center">
            <div className='flex gap-3 w-[10rem] h-[1.5rem] bg-gray-200'>
              
            </div>
            <div><p className='ml-3'></p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
          <div className=" animate-pulse card border-0 rounded-2xl md:w-[25rem] w-[21rem] overflow-hidden h-[30rem] bg-[#FAFAFA] mt-10 ">
    <div className='img w-[25rem] h-[20rem] bg-gray-300'>
    </div>
    <div className='px-4'> 
      <div className="top">
        <p className='text-[.75rem] mt-[1.5rem] bg-gray-200 w-[15rem] h-[1.5rem] text-[#24AB70]'></p>
      </div>
      <div className="mid">
        <p className='md:text-[1.5rem] text-[1rem] mt-[.5rem] bg-gray-200 h-[2rem] w-[20rem] font-semibold'></p>
      </div>
      <div className="bottom mt-4 md:mt-[2rem]">
        <div className="flex gap-5 justify-start items-center">
          <span className='w-[7rem] h-[1.5rem] bg-gray-200'></span>
          <div className='line'>
            <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#DDDDDD" />
            </svg>

          </div>
          <div className="rate flex items-center">
            <div className='flex gap-3 w-[10rem] h-[1.5rem] bg-gray-200'>
              
            </div>
            <div><p className='ml-3'></p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
          </div> 
          </div>: 
          
<div className="main-grid lg:flex flex-row gap-5 lg:gap-5 mt-[1rem]">
        {hotels.map((hotel, index) => (
          <PopularHotelCard
          key={index}
          img={hotel.img}
          location={hotel.location}
          name={hotel.name}
          price={hotel.price}
          rate={hotel.rate}
          />
          ))}
          
          
      </div>
          }


    </div>
  );
};

export default PopularHotels;
