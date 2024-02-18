import Image from 'next/image'
import React from 'react'

const HotelCard = ({name,address,des,rating,amenities,contact_info,hotel_image}) => {
    
    const amenitiesString = amenities ? amenities : "";

    // Split the string into an array, removing leading/trailing spaces
    const amenitiesArray = amenitiesString.trim().split(",");

    // Initialize an empty array to store the formatted list items
    const formattedListamenities = [];

    // Loop through each amenity and create a <li> element with it
    amenitiesArray.forEach((amenity) => {
        formattedListamenities.push(`<li>${amenity.trim()}</li>`);
    });

    // Join the formatted list items into a single string
    const formattedListStringamenities = formattedListamenities.join("");



    const contactString = contact_info ? contact_info :""


    const contactArray = contactString.trim().split(",");
    

    const linkPrefixes = ["mailto:", "tel:"];
    

    const formattedListcontact = [];
    

    contactArray.forEach((contact, index) => {
      const linkPrefix = linkPrefixes[index] || "";
      formattedListcontact.push(`<li><a href="${linkPrefix}${contact.trim()}">${contact.trim()}</a></li>`);
    });
    

    const formattedListStringcontact = formattedListcontact.join("");
    
    
    return (
        <div>
            <div className='bg-[#FAFAFA]  h-[20rem] w-[70rem] grid grid-cols-2 mb-[3rem]'>
                <div className='hotel-img bg-cover text-white' style={{ backgroundImage: `url('${hotel_image}')`, backgroundPosition: 'center' }}>

                </div>
                <div className='hotel-dets  mt-[1rem] ml-5'>
                    <div className='name-hotel'>
                        <p className='font-semibold text-[2rem]'>{name}</p>
                    </div>
                    <div className='name-address mt-2'>
                        <p className='text-xl italic text-[#555]'>{address}</p>
                    </div>
                    <div className='name-des mt-2'>
                        <p className='text-xl '>{des}</p>
                    </div>

                    <div className='name-amenities mt-2'>
                        <ul dangerouslySetInnerHTML={{ __html: formattedListStringamenities }} className='flex gap-4 text-xl italic text-[#555]' />
                    </div>

                    <div className='name-rate mt-2'>
                        <p className='text-xl'>{rating} out  of 5</p>
                    </div>
                    <div className='name-contact_info'>
                    <ul dangerouslySetInnerHTML={{ __html: formattedListStringcontact }} className=' gap-1 flex flex-col text-xl text-blue-600 underline mt-2' />
                    </div>
                    <div className='flex justify-end'>
                        <a href="#" className='bg-green-500 mr-4 -mb-2 px-4 py-2 text-white border-0 rounded-lg'>book now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard