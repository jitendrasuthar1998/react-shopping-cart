import { ADD_TO_CART } from '../Constants/constants'

export const addToCart = (data) => {
  console.log('data in action is == ', data)
  return {
    type: ADD_TO_CART,
    data: data,
  }
}

// export const removeToCart = (data) => {
//   return {
//     type: 'REMOVE_FROM_CART',
//     data: data,
//   }
// }
