import React from 'react'
import '../App.css'
const User = (props) => {
  const { data } = props

  console.log('props are == ', props)
  return (
    <div className='App'>
      <div style={{ marginTop: '2rem' }}>
        <h1>User Details</h1>
        <h3>Name : {data.name}</h3>
        <h3>Age : {data.age}</h3>
      </div>
    </div>
  )
}

export default User
