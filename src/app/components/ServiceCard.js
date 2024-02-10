import React from 'react'

const ServiceCard = ({logo,text}) => {
    
  return (
    <div className="flex justify-center items-center flex-col  gap-[1.5rem] w-[12.06rem] h-[12.06rem] border border-[#E8E8E8]">
        <div classNameName='Service-logo'>
           {logo}
        </div>
        <div className="text-[#222222] text-[1rem] font-[400]">
            {text}
        </div>
    </div>
  )
}

export default ServiceCard