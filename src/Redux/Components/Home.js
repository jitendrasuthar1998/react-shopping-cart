import React from 'react'

const Home = (props) => {
  console.log('props of Home is == ', props.data)
  return (
    <div>
      <div className='add-to-cart'>
        <span className='cart-count'>{props.data.length}</span>
        <img
          src='https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE='
          alt='cart'
        />
      </div>
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
        <div className='btn-wrapper item'>
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: 'I Phone 11' })
            }
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className='cart-wrapper '>
        <div className='img-wrapper item'>
          <img
            src='https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg'
            alt='iphone'
          />
        </div>
        <div className='text-wrapper item'>
          <span>Motorola</span>
          <span>Price $2000</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() =>
              props.addToCartHandler({ price: 2000, name: 'Motorola' })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
