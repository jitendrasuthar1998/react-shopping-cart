import React from 'react'
import { Product } from './Product'

export const Main = (props) => {
  const { products, onAdd } = props
  return (
    <main className='block col-2'>
      <h2>Products</h2>
      <div className='row'>
        {products.map((product, index) => (
          <Product key={index} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  )
}
