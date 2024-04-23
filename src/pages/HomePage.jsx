import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MainProducts from '../components/MainProducts'

const HomePage = () => {
  return (
    <>
        <div className="w-100">
            <Navbar />
            <Hero />
            <MainProducts />
        </div>
    </>
  )
}

export default HomePage
