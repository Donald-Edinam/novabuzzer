import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/style.css' // Import the CSS file
import NavBar from '../components/homepage/NavBar'

const ProductDetails = ({ products, onAddToCart, cart }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);

    const [animateButton, setAnimateButton] = useState(false);

    const handleAddToCart = () => {
        setAnimateButton(true);
        onAddToCart(product.id, 1);
        setTimeout(() => {
            setAnimateButton(false);
        }, 300); // Duration of the animation
    };

    if (!product) return <h1>Product not found</h1>;

    return (
        <>
            <section className="py-5">
                <NavBar cart={cart}/>
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img className="card-img-top mb-5 mb-md-0" src={product.image.url} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: {product.sku}</div>
                            <h1 className="display-5 fw-bolder">{product.name}</h1>
                            <div className="fs-5 mb-5">
                                <span>{product.price.formatted_with_symbol}</span>
                            </div>
                            <p className="lead">{product.seo.description}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} readOnly />
                                <button 
                                    onClick={handleAddToCart} 
                                    className={`btn btn-outline-dark flex-shrink-0 ${animateButton ? 'btn-click-animation' : ''}`} 
                                    type="button">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
