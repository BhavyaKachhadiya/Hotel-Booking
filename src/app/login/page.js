import React from 'react'
import Navbar from '../components/Navbar'
import PopularHotels from '../components/PopularHotels'
import Footer from '../components/Footer'
import Login from '../components/Login'

const page = () => {
  return (
    <div className="lg:mx-[4rem] mx-[1.5rem]">
        <Navbar/>
        <Login/>
        <PopularHotels/>
        <Footer/>
    </div>
  )
}

export default page