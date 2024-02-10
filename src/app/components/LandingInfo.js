import React from 'react'

const LandingInfo = ({ckey,logo,name,name_des}) => {
    
  return (
    <div>
        <div className='flex justify-center mr-[2rem]'>
                            <div className='logo mr-[.63rem]'>
                                {logo}
                            </div>
                            <div className='logo-details mr-[2rem]'>
                                <div className='logo-name text-[1.25rem]'>
                                    <span>{name}</span>
                                </div>
                                <div className='logo-detail text-[.88rem] text-[#555555]'>
                                    <span>{name_des}</span>
                                </div>
                            </div>
                            {ckey >= 0 && ckey <= 2 ? (
  <svg width="1" height="60" viewBox="0 0 1 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="-2.18557e-08" x2="0.500003" y2="60" stroke="#E8E8E8"/>
  </svg>
) : null}

                        </div>
                        
    </div>
    
  )
}

export default LandingInfo