import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import IndexApp from './Redux/IndexApp'

import rootReducer from './Redux/Services/Reducers/rootReducer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

console.log('store data is == ', store)

ReactDOM.render(
  <Provider store={store}>
    <IndexApp />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
