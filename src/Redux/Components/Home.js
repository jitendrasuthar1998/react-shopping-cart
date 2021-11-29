import React from 'react'

const Home = (props) => {
  console.log('props of Home is == ', props)
  return (
    <div>
      <h2>Home Component</h2>
      <div className='cart-wrapper '>
        <div className='img-wrapper item'>
          <img
            src='https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg'
            alt='iphone'
          />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price $1000</span>
        </div>
        <div className='button-container'>
          <div className='btn-wrapper'>
            <button
              onClick={() =>
                props.addToCartHandler({ price: 1000, name: 'I Phone 11' })
              }
            >
              Add to cart
            </button>
            <button
              className='remove-cart-btn'
              onClick={() =>
                props.removeToCartHandler({ price: 1000, name: 'I Phone 11' })
              }
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
