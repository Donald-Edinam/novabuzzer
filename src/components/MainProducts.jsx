import React from 'react'

const MainProducts = () => {

    const demoArray = [1,2,3,4,5,6]

  return (
    <>
        <div className="container px-4 py-5 ht-100-real">
            <h2 className='pb-2 border-bottom'>Featured Products</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4  py-5">
                {demoArray.map((item) => (
                    <div className="col card card-cover flex flex-column">
                        <h3 className="card-header text-center fw-bold">
                            Quality Arts
                        </h3>
                        <div className="card-body">
                            <p className="card-text text-center">Professional touch</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default MainProducts
