import { ADD_TO_CART } from '../Constants/constants'

const initialState = {
  cartData: [],
}

export const cartItems = (state = [], action) => {
  // console.log('initialState is == ', initialState)
  switch (action.type) {
    case ADD_TO_CART:
      console.log('reducer == ', action)
      return [...state, { cartData: action.data }]

    default:
      return state
  }
}
