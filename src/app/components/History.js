import Image from 'next/image'
import React from 'react'

const History = () => {
  return (
    <div className='lg:h-[32.5rem] lg:mt-[7.50rem] h-[60.5rem]  bg-[#F4FBF8] lg:grid  lg:grid-cols-2 place-items-center'>
        <div className='left lg:w-[39.25rem] lg:h-[32.5rem] w-[21.3rem] h-[30rem] bg-cover' style={{ backgroundImage:"url('history-Img.jpeg')", backgroundPosition: 'center' }}></div>
        <div className="right lg:ml-[4.38rem] ml-4" >
            <h3 className="heading font-semibold lg:text-[40px] text-[2.5rem]">Discover our History</h3>
            <p className="subheading-1 text-[#555555] text-[1rem] mt-[2rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <p className="subheading-1 text-[#555555] text-[1rem] mt-[1rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='bg-[#24AB70] text-white w-[167px] h-[56px] border-0 rounded-[2.25rem] mt-[3.14rem]'>Explore More</button>
    
        </div>
    </div>
  )
}

export default History