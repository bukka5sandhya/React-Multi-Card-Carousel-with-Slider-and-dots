import './index.css'
import React from 'react'

function Products(props) {
  return (
    <>
      <div className="card">
        <img className="product-image"
        src={props.imgUrl}
        alt="product1"/>
        <h2 className="heading-product">{props.name}</h2>
        <p className="price-product">{props.price}</p>
        <p className="text-product">{props.description}</p>
        <p>
        <button className="button">Add to Cart</button>
        </p>
        </div>
    </>
  )
}

export default Products