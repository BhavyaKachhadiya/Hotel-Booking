"use client"
import React, { useState } from 'react'

const Navbar = () => {
    const NavLink = [
        {
            name: "Booking",
            link: "/booking"
        },
        {
            name: "Facilities",
            link: "/facilities"
        },
        {
            name: "About Us",
            link: "/about-us"
        },
        {
            name: "Location",
            link: "/location"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
    return (
        <>
            <div className='main-navbar mt-[2rem] flex justify-between items-center'>
                <div className='logo'>

                </div>
                <div className='gap-[2.5rem] hidden md:flex '>
                    {NavLink.map((navItem, index) => (
                        <a key={index} href={navItem.link}>{navItem.name}</a>
                    ))}
                </div>
                <div>
                    <button className='bg-[#24AB70] hidden md:flex py-[.5rem] px-[1rem] text-white rounded-[2.19rem]'>Login</button>
                </div>
                <div className='flex md:hidden w-[3rem] h-[3rem]' >
          {/* Hamburger menu icon */}
          <buttom className='hamburger-icon w-[5rem] h-[5rem] text-[#24AB70]' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </buttom>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='flex flex-col gap-3 md:hidden'>
          {NavLink.map((navItem, index) => (
            <a key={index} href={navItem.link}>{navItem.name}</a>
          ))}
          {/* You can add additional mobile-specific content or styling here */}
        </div>
      )}
        
    </>
    )
}

export default Navbar;