import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constants/constants'

export const addToCart = (data) => (dispatch) => {
  console.log('addToCart action has been called')
  console.log('data in addToCart action is == ', data)
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  })
}

export const removeToCart = (data) => (dispach) => {
  console.log('removeToCart Action has been called')
  console.log('data in removeToCart is == ', data)

  dispach({
    type: REMOVE_FROM_CART,
    payload: data,
  })
}
