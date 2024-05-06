import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Product from '../components/Product'
import ProductDetails from '../components/ind/ProductDetails'
import CartContainer from '../components/ind/CartContainer'

const Navigation = ({ products, cart, onAddToCart }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage products={products} cart={cart} onAddToCart={onAddToCart}/>} />
                <Route path='/product/:id' element={<ProductDetails products={products}/>} />
                <Route path='/shopping-cart' element={<CartContainer cart={cart}/> } />
                {/* <Route path="product/:id" element={<Product products={products} cart={cart}/>} /> */}
            </Routes>
        </BrowserRouter>    
    )
}

export default Navigation