import React, { useState } from 'react'

import axios from 'axios'

const StoreDetails = (props) => {
  console.log('props of storeDetails is == ', props)

  const getStoreDetails = props.getStoreDetails

  //   const [data, setData] = useState(null)
  //
  //   const handlePress = async () => {
  //     await axios
  //       .get('http://localhost:8000/store/verify/6107d7b1b8f5c22458c8dc85')
  //       .then((response) => {
  //         setData(response.data)
  //       })
  //   }
  //
  //   console.log('data after click is == ', data)

  return (
    <div
      style={{
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          height: 50,
          backgroundColor: 'blue',
          width: 200,
          alignSelf: 'center',
          marginTop: 20,
          color: 'white',
          fontSize: 20,
        }}
        onClick={() => getStoreDetails()}
      >
        Store details
      </button>
    </div>
  )
}

export default StoreDetails
