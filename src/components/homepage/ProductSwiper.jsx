import React, { useState } from "react";
import Slider from "react-slick";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import { Link } from "react-router-dom";
import './style.css'; // Import the CSS file

function ProductSwiper({ products, onAddToCart }) {
    const [animateButtons, setAnimateButtons] = useState({});

    const handleAddToCart = (productId) => {
        setAnimateButtons((prev) => ({ ...prev, [productId]: true }));
        onAddToCart(productId, 1);
        setTimeout(() => {
            setAnimateButtons((prev) => ({ ...prev, [productId]: false }));
        }, 300); // Duration of the animation
    };

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container">
            <h1 className="pb-2 border-bottom">Hot and New</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div className="col" style={{ maxHeight: "200px" }} key={product.id}>
                            <div className="card mx-2 h-100">
                                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                                    <img
                                        src={product.image.url}
                                        alt={product.name}
                                        style={{ height: "200px" }}
                                        className="img-fluid"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name.slice(0, 48)}...</h5>
                                        <p className="card-text">{product.seo.description.slice(0, 50)}...</p>
                                    </div>
                                </Link>
                                <div className="card-footer d-flex justify-content-between align-items-center container w-100">
                                    <button
                                        className={`btn btn-dark ${animateButtons[product.id] ? 'btn-click-animation' : ''}`}
                                        onClick={() => handleAddToCart(product.id)}
                                    >
                                        <ShoppingCartIcon className="text-white" style={{ width: "20px" }} />
                                    </button>
                                    <p className="my-1 text-bold">{product.price.formatted_with_symbol}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProductSwiper;
