import React from 'react'
import NavBar from '../components/homepage/NavBar'
import HeroSection from '../components/homepage/HeroSection'
import MainProducts from '../components/homepage/MainProducts'
import ProductSwiper from '../components/homepage/ProductSwiper'
import Footer from './Footer'

const HomePage = ({ products, onAddToCart, cart}) => {
  return (
    <div>
      <NavBar cart={cart}/>
      <HeroSection />
      <MainProducts products={products} onAddToCart={onAddToCart}/>
      <ProductSwiper products={products} onAddToCart={onAddToCart}/>
      <Footer />
    </div>
  )
}

export default HomePage
