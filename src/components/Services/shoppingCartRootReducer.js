import { combineReducers } from 'redux'

import { cartItems, storeDetailsReducer } from './reducers'

// console.log('cartItems is == ', cartItems)

export default combineReducers({
  cartItems,
  storeDetailsReducer,
})
