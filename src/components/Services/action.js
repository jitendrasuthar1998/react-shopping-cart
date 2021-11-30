import { ADD_TO_CART, GET_STORE_DETAILS, REMOVE_FROM_CART } from './constants'
import Axios from 'axios'
export const addToCart = (data) => {
  console.log('addToCart action has been called')
  console.log('data of addToCart action is == ', data)
  return {
    type: ADD_TO_CART,
    payload: data,
  }
}

export const removeToCart = (data) => {
  console.log('removeToCart Action has been called')
  console.log('data in removeToCart is == ', data)

  return {
    type: REMOVE_FROM_CART,
    payload: data,
  }
}

export const getStoreDetails = () => async (dispatch) => {
  const { data } = await Axios.get(
    'http://localhost:8000/store/verify/6107d7b1b8f5c22458c8dc85'
  )

  console.log('data after api calling is == ', data)

  dispatch({
    type: GET_STORE_DETAILS,
    payload: data,
  })
}
