import React from 'react'

const Header = (props) => {
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
    </div>
  )
}

export default Header
