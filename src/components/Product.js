import React from 'react'

export const Product = (props) => {
  const { product } = props

  return (
    <div>
      <img className='small' src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}
