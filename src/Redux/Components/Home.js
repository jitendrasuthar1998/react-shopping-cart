import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='add-to-cart'>
        <img src='https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE=' />
      </div>
      <h2>Home Component</h2>
      <div className='cart-wrapper '>
        <div className='img-wrapper item'>
          <img src='https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg' />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price $1000</span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
