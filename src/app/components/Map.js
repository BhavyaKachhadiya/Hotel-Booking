import React from 'react'

const Map = () => {
  return (
    <div className='flex justify-center relative items-center lg:mt-[12rem] mt-[5rem] bg-[#24AB70] mx-3'>
        <div className='lg:absolute hidden lg:bottom-[2rem]  bg-white z-10 h-[9rem] w-[70rem] border-0 rounded-2xl pl-[4rem] lg:grid grid-cols-2'>
            <div className="left flex flex-col justify-center items-start" >

            <h3 className='font-semibold text-[2rem]'>Location of our Hotel</h3>
            <p className='text-[1rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
            <div className='flex justify-center items-center'>

            <div className="right w-[27.25rem] h-[3.5rem] bg-[#FAFAFA] flex justify-between border-0 rounded-[3.2rem]">
                <input type="email" name="email" className='bg-transparent pl-[1rem] focus-visible:outline-none w-[18.5rem]' placeholder='Enter your email' />
                <button className='bg-[#24AB70] text-white border-0 rounded-[3.2rem] w-[7.75rem] h-[3.5rem]'>Contact</button>
            </div>
            </div>
        </div>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.611385308621!2d70.45639427527037!3d21.52293658025295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958018c6f2dc553%3A0x90ffff279541994e!2sTaj%20Resturent!5e0!3m2!1sen!2sin!4v1707754469627!5m2!1sen!2sin"
        width="1200"
        height="650"
        style={{ border: '0',opacity:'.7',background:'#24AB70'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      
 </div>
  )
}

export default Map