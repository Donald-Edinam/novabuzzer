import React from 'react'
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';

const MainProducts = ({ products,onAddToCart }) => {

    const sliceProducts = products.slice(0,4)

  return (
    <>
        <div className="container px-4 py-5">
            <h2 className='pb-2 border-bottom'>Featured Products</h2>
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4  py-5">
                {sliceProducts.map((item) => (
                    <div className="col">
                        <div className="card h-100">
                            <img src={item.image.url} height={350} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.seo.description.slice(0,160)}...</p>
                                {/* {item.description} */}
                            </div>
                            <div className="card-footer d-flex justify-content-between container w-100" >
                                <button className="btn btn-secondary" onClick={() => onAddToCart(item.id, 1)}>Add to Cart</button>
                                <ShoppingCartIcon style={{ width: "25px" }}/>
                            </div>
                        </div>
                    </div>
                
                ))}
                {/* {demoArray.map((item) => (
                    <div className="col card card-cover flex flex-column">
                        <h3 className="card-header text-center fw-bold">
                            Quality Arts
                        </h3>
                        <div className="card-body">
                            <p className="card-text text-center">Professional touch</p>
                        </div>
                        <div className="card-img d-flex justify-content-center align-items-center gy-3 my-4">
                            <img src="https://placehold.jp/1a1a1e/ffffff/150x150.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    </>
  )
}

export default MainProducts
