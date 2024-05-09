import React, { useState, useEffect } from 'react';
import Navigation from './navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import commerce from '../lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetchError, serFetchError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await commerce.products.list();
        const cartResponse = await commerce.cart.retrieve();
        setProducts(productResponse.data);
        setCart(cartResponse);
        setLoading(false); // Set loading to false after both products and cart data are fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        serFetchError(error)
      }
    };

    fetchData();
  }, []);

  // Handle adding products to cart
  const handleAddToCart = async (productId, quantity) => {
    const addToCartResponse = await commerce.cart.add(productId, quantity);
    setCart(addToCartResponse.cart);
  };

  // Handle adding quantity of items of cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart)
  }

  // Remove item from cart
  const handleRemoveFromCart = async (productId) =>  {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart)
  }
  // Empty cart content
  const handleEmptyCart = async () => {
    const response = commerce.cart.empty()
    setCart(response.cart)
  }


  console.log("Main cart, functionality", fetchError)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <div>
           <h1 className="site-name text-center">NovaBuzzer</h1>
           {
            fetchError ? <h6 className='text-danger text-center'>Failed to fetch, Try refreshing the page</h6> : null
           }
        </div>
      ) : (
        <Navigation 
        products={products} 
        cart={cart} 
        onAddToCart={handleAddToCart}
        handleEmptyCart={handleEmptyCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleUpdateCartQty={handleUpdateCartQty}
        />
      )}
    </div>
  );
};

export default App;
