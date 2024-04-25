import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MainProducts from '../components/MainProducts'
import ProductSwiper from '../components/ProductSwiper'
import HomeFooter from '../components/HomeFooter'

const HomePage = () => {
  return (
    <>
        <div className="w-100">
            <Navbar />
            <Hero />
            <MainProducts />
            <ProductSwiper />
            <div className="b-example-divider"></div>
            <HomeFooter />
        </div>
    </>
  )
}

export default HomePage
