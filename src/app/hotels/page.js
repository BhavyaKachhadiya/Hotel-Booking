import React from 'react'
import Navbar from '../components/Navbar'
import Hotel from '../components/Hotel'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className="lg:mx-[4rem] mx-[1.5rem]">
        <Navbar/>
        <Hotel/>
        <Footer/>
    </div>
  )
}

export default page