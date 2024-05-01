import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MainProducts from '../components/MainProducts'
import ProductSwiper from '../components/ProductSwiper'
import HomeFooter from '../components/HomeFooter'

// Commerce.js instance
import commerce from '../../lib/commerce'

const HomePage = () => {
// State for managing Products and Carts
const [products, setProducts] = useState([]);
const [cart, setCart] = useState({})
 
// Handle the fetching of products from commerce.js
const fetchProducts = async () => {
  try {
    const { data } = await commerce.products.list();
    setProducts(data)
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Retrieve cart items
const fetchCart = async () => {
  try {
    const cartResponse = await  commerce.cart.retrieve();
    setCart(cartResponse)
    
  } catch (error) {
    console.error("Error fetching cart", error)
  }
}

// Handle cart functionality
const handleAddToCart = async (productId, quantity) => {
  const addToCart = await commerce.cart.add(productId, quantity);
  setCart(addToCart.cart)
}


// useEffect(() => {
//   let counter = 0;

//   const fetchProductsMultipleTimes = async () => {
//     while (counter < 5) {
//       await fetchProducts();
//       counter++;
//     }
//   };

//   fetchProductsMultipleTimes();
// }, []);

useEffect(() =>{
  fetchProducts();
  fetchCart();
}, [])

console.log("Cart object", cart)

  return (
    <>
      <div className="w-100">
        <Navbar />
        <Hero />
        <MainProducts products={products} onAddToCart={handleAddToCart}/>
        <ProductSwiper />
        <div className="b-example-divider"></div>
        <HomeFooter />
      </div>
    </>
  )
}

export default HomePage
