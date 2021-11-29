import React from 'react'
import HomeContainer from './Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer'
import './ReduxApp.css'

const IndexApp = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <HomeContainer />
    </div>
  )
}

export default IndexApp
