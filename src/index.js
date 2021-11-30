import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import IndexApp from './Redux/IndexApp'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import shoppingCartRootReducer from './components/Services/shoppingCartRootReducer'

const initialState = {
  cart: {
    cartItems: [],
  },
}

console.log('initialState of store is == ', initialState)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  shoppingCartRootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

// console.log('store data is == ', store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
