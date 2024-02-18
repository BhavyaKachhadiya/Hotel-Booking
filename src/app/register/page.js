import React from 'react'
import Navbar from '../components/Navbar'
import History from '../components/History'
import Footer from '../components/Footer'
import Register from '../components/Register'

const page = () => {
  return (
    <div className="lg:mx-[4rem] mx-[1.5rem]">
        <Navbar/>
        <Register/>
        <History/>
        <Footer/>
    </div>
  )
}

export default page