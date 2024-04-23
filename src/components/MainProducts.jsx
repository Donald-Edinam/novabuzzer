import React from 'react'
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';

const MainProducts = () => {

    const demoArray = [1,2,3,4,5,6]

  return (
    <>
        <div className="container px-4 py-5 ht-100-real">
            <h2 className='pb-2 border-bottom'>Featured Products</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4  py-5">
                {demoArray.map((item) => (
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://placehold.co/600x400" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between container w-100" >
                                <button className="btn btn-secondary">Add to Cart</button>
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
