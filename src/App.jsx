import React, { useState, useEffect } from 'react'
import Navigation from './navigation/Navigation'
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Loading screen
import Loader from '../src/assets/loader.gif'

// Commmerce instance
import commerce from './lib/commerce'

const App = () => {



  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)
  }

  // Fetch cart
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    setLoading(false);
  }

  // Add to cart functionality
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  // Update Cart Quantity
  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart)
  }

  // Remove from cart
  const handleRemoveFromCart = async (productId) => {
    const respnse = await commerce.cart.remove(productId);
    setCart(respnse.cart)

  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(" Cart Info", cart)

  const MainContent = () => {
    return (
      <div>
        <Navigation
          products={products}
          onAddToCart={handleAddToCart}
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleEmptyCart={handleEmptyCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleUpdateCartQty={handleUpdateCartQty}
        />
      </div>
    )
  };

  const LoadingContainer = () => {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <img src={Loader} style={{ width: "220px" }} alt="Loading..." className="mx-auto my-5 py-5 d-block" />
      </div>


    )
  }


  return (
    loading ? <LoadingContainer /> : <MainContent />
  );
}

export default App
