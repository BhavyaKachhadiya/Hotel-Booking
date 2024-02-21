"use client"
import React, { useState, useEffect, useCallback } from 'react';
import HotelCard from './HotelCard';

const Hotel = () => {
    const [hotelData, setHotelData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchHotels();
        console.log(currentPage);
    }, [currentPage]);

    const fetchHotels = () => {
        setLoading(true);
        fetch(`https://codex-hotel-booking-backend.vercel.app/api/v1/hotels?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                const updatedHotelData = data.hotels.map(hotel => ({
                    ...hotel,
                    hotel_image: `https://source.unsplash.com/random/400x320/?${hotel.name.toLowerCase().replace(/\s/g, '-')}`
                }));
                setHotelData(prevData => [...prevData, ...updatedHotelData]);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            });
    };

    const handleLoadMore = useCallback(() => {
        setCurrentPage(prevPage => prevPage + 1);
    }, []); // Empty dependency array since handleLoadMore doesn't depend on any external variables

    return (
        <>
            <div className='grid lg:grid-cols-3 place-items-center mt-6'>
                {hotelData.map(hotel => (
                    <HotelCard
                        key={hotel.id}
                        name={hotel.name}
                        address={hotel.address}
                        des={hotel.des}
                        rating={hotel.rating}
                        amenities={hotel.amenities}
                        contact_info={hotel.contact_info}
                        hotel_image={hotel.hotel_image}
                    />
                ))}
                {loading && <p>Loading...</p>}
            </div>
            <div className="pagination flex justify-center items-center gap-[2rem]">
                {currentPage < totalPages ? (
                    <button className='bg-green-600 w-[10rem] h-[3rem] text-white border-0 rounded-lg' onClick={handleLoadMore}>Show More</button>
                ) : (
                    <span>All Hotels Loaded</span>
                )}
            </div>
        </>
    );
};

export default Hotel;
