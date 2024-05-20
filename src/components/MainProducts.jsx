import React, { useState } from 'react';
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';
import { Link } from 'react-router-dom';
import Product from './Product';
import 'style.css';

const MainProducts = ({ products, onAddToCart }) => {
    const sliceProducts = products.slice(0, 4);
    const [animateButtons, setAnimateButtons] = useState({});

    const handleAddToCart = (productId) => {
        setAnimateButtons((prev) => ({ ...prev, [productId]: true }));
        onAddToCart(productId, 1);
        setTimeout(() => {
            setAnimateButtons((prev) => ({ ...prev, [productId]: false }));
        }, 300); // Duration of the animation
    };

    return (
        <>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Featured Products</h2>
                <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
                    {sliceProducts.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <Link to={`/product/${product.id}`} className="card text-decoration-none card-cover h-100 overflow-hidden text-white bg-dark rounded-1 shadow-lg">
                                    <img src={product.image.url} height={350} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.seo.description.slice(0, 160)}...</p>
                                    </div>
                                </Link>
                                <div className="card-footer d-flex justify-content-between container w-100">
                                    <button
                                        id='button'
                                        className={` ${animateButtons[product.id] ? 'btn-click-animation' : ''}`}
                                        onClick={() => handleAddToCart(product.id)}
                                    >
                                        Add to Cart
                                    </button>
                                    <ShoppingCartIcon style={{ width: '25px' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainProducts;
