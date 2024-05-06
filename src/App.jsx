import React, { useState, useEffect } from 'react';
import Navigation from './navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import commerce from '../lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

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
      }
    };

    fetchData();
  }, []);

  // Handle adding products to cart
  const handleAddToCart = async (productId, quantity) => {
    const addToCartResponse = await commerce.cart.add(productId, quantity);
    setCart(addToCartResponse.cart);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <div>
           <h1 className="site-name">NovaBuzzer</h1>
        </div>
      ) : (
        <Navigation products={products} cart={cart} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default App;
