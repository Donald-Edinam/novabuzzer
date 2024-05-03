import React, {useState, useEffect} from 'react'
import Navigation from './navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Commerce.js instance
import commerce from '../lib/commerce'


const App = () => {

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
console.log("Products", products)



  return (
    <>
      <Navigation products={products} cart={cart} onAddToCart={handleAddToCart}/>
    </>
  )
}

export default App
