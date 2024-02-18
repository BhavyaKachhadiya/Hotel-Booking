"use client"
import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';

const Hotel = () => {
    const [hotelData, setHotelData] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://codex-hotel-booking-backend.vercel.app/api/v1/hotels?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                const updatedHotelData = data.hotels.map(hotel => ({
                    ...hotel,
                    hotel_image: `https://source.unsplash.com/random/400x320/?${hotel.name.toLowerCase().replace(/\s/g, '-')}`
                }));
                setHotelData(updatedHotelData);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching hotel data:', error));

            console.log(hotelData)
    }, [currentPage]);

    
   
    
    const handleNextPage = () => {
        setCurrentPage(currentPage => currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className='flex justify-center flex-col '>
            {hotelData.map(hotel => (
                <HotelCard
                    name={hotel.name}
                    address={hotel.address}
                    des={hotel.des}
                    rating={hotel.rating}
                    amenities={hotel.amenities}
                    contact_info={hotel.contact_info}
                    hotel_image={hotel.hotel_image}
                />
            ))}
            <div className="pagination flex justify-between items-center">
                <button className='bg-green-600 w-[5rem] h-[3rem] text-white border-0 rounded-lg' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button className='bg-green-600 w-[5rem] h-[3rem] text-white border-0 rounded-lg' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Hotel;
