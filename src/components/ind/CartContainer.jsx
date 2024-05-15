import React, { useState } from 'react';
import Navbar from '../Navbar';

const CartContainer = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const isEmpty = !cart || !cart.total_items;
    const cartItems = cart ? cart.line_items : [];

    // const [cartInfo, setCartInfo] = useState();
    // setCartInfo(cartItems)

    const EmptyCart = () => {

        return (
            <h1 className="heading-4 text-center mt-5">Your cart is currently empty, happy shopping</h1>
        );
    };

    const FilledCart = () => {
        return (
            <>
                <div className="container">
                    <h1 className='text-center mb-4'>Total Cart</h1>
                    {cartItems && cartItems.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.image.url}
                                        alt={item.name}
                                        className="mr-3"
                                        style={{ maxWidth: '50px', maxHeight: '50px', width: 'auto', height: 'auto' }}
                                    />
                                    <div>
                                        <h5 className="card-title mb-0">{item.name}</h5>
                                        <div className="card-text mb-0 d-flex">
                                            <div className="d-flex w-25 justify-content-between mx-2 my-1">
                                            <p className='m-2'>{`Quantity: `}</p>
                                                <p className='p-1' onClick={()=> handleUpdateCartQty(item.id, item.quantity - 1)}>-</p>
                                                <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(item.id, e.target.value)
                                                }
                                                className="form-control d-inline-block"
                                                style={{ width: '50px', height: '40px' }}
                                            />
                                            <p className='p-1' onClick={() => handleUpdateCartQty(item.id, item,quantity + 1)}>+</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <strong>{item.price.formatted_with_symbol}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="d-flex row">
                                <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">Cart Summary</h5>
                                    <p className="card-text mb-3">
                                        Total:{' '}
                                        <strong>{cart.subtotal.formatted_with_symbol}</strong>
                                    </p>
                                    <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary btn-block">
                                        Checkout
                                    </button>
                                    <button className="btn btn-danger btn-block" onClick={() => handleEmptyCart}>
                                        Clear Cart
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        // Implement your logic for updating item quantity in the cart
    };

    return (
        <>
            <div className="">
                <Navbar cart={cart} />
                {isEmpty ? <EmptyCart /> : <FilledCart />}
            </div>
        </>
    );
};

export default CartContainer;
