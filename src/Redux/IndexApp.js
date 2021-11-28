import React from 'react'
import User from './User'
import '../App.css'
const IndexApp = () => {
  return (
    <div className='App'>
      <h1>IndexApp Component</h1>
      <User data={{ name: 'Ram', age: 20 }} />
      <User data={{ name: 'Silky', age: 10 }} />
    </div>
  )
}

export default IndexApp
