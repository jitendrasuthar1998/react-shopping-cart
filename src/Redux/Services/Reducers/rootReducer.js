import { combineReducers } from 'redux'

import { cartItems } from './reducers'

// console.log('cartItems is == ', cartItems)

export default combineReducers({
  cartItems,
})
