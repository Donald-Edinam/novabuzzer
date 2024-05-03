import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MainProducts from '../components/MainProducts'
import ProductSwiper from '../components/ProductSwiper'
import HomeFooter from '../components/HomeFooter'

const HomePage = ({ products, cart }) => {
// State for managing Products and Carts

  return (
    <>
      <div className="w-100">
        <Navbar cart={cart}/>
        <Hero />
        <MainProducts products={products}/>
        <ProductSwiper />
        <div className="b-example-divider"></div>
        <HomeFooter />
      </div>
    </>
  )
}

export default HomePage
