import React, { useState } from 'react';
import Navbar from '../Navbar';

const CartContainer = ({ cart }) => {

    const isEmpty = !cart.total_items;

    const cartItems = cart.line_items;
    console.log("Main cart info", cart);

    const EmptyCart = () => {
        return (
            <h1 className="heading-4">Your cart is currently empty, happy shopping</h1>
        );
    };

    const FilledCart = () => {
        return (
            <>
                <div className="d-flex flex-column">
                    <h1 className='text-center'>Total Cart</h1>
                    {cartItems && cartItems.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.image.url}
                                        alt={item.name}
                                        className="mr-3"
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                    <div>
                                        <h5 className="card-title mb-0">{item.name}</h5>
                                        <p className="card-text mb-0">
                                            100
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(item.id, e.target.value)
                                                }
                                                className="form-control d-inline-block"
                                                style={{ width: '60px' }}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <strong>{item.price.formatted_with_symbol}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> {/* Closing tag for the outermost div */}
                <div className="col">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Cart Summary</h5>
                                <p className="card-text mb-3">
                                    Total:{' '}
                                    <strong>{cart.subtotal.formatted_with_symbol}</strong>
                                </p>
                                <button className="btn btn-primary btn-block">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Navbar cart={cart} />
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </>
    );
};

export default CartContainer;
