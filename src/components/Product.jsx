import React from 'react'
import { useParams } from 'react-router-dom'
import commerce from '../../lib/commerce'
import Navbar from './Navbar'

const Product = ({ products, cart }) => {

  console.log("Product details", products)

  const { id } = useParams();
  const product = products.find(product  => product.id === id)

  if(!product) return <h1>Product not found</h1>

  return (
    <>
        <Navbar cart={cart}/>
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img src={product.image.url} height={350} alt="" />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.seo.description.slice(0, 160)}...</p>
            </div>
            </div>
        </div>  
    </>
  )
}

export default Product
