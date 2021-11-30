import { Header } from './components/Header'
import { Main } from './components/Main'
import { Basket } from './components/Basket'
import { connect } from 'react-redux'
import {
  addToCart,
  removeToCart,
  getStoreDetails,
} from '../src/components/Services/action'
import data from './data'
import { useState } from 'react'
import StoreDetails from './components/StoreDetailsContainer'

function App(props) {
  console.log('props of App component is from redux store is == ', props)
  const { products } = data

  // const [cartItems, setCartItems] = useState([])

  //   const onAdd = (product) => {
  //     const exist = cartItems.find((x) => x.id === product.id)
  //     if (exist) {
  //       setCartItems(
  //         cartItems.map((x) =>
  //           x.id === product.id
  //             ? {
  //                 ...exist,
  //                 qty: exist.qty + 1,
  //               }
  //             : x
  //         )
  //       )
  //     } else {
  //       setCartItems([...cartItems, { ...product, qty: 1 }])
  //     }
  //   }
  //
  //   const onRemove = (product) => {
  //     const exist = cartItems.find((x) => x.id === product.id)
  //     if (exist.qty === 1) {
  //       setCartItems(cartItems.filter((x) => x.id !== product.id))
  //     } else {
  //       setCartItems(
  //         cartItems.map((x) =>
  //           x.id === product.id
  //             ? {
  //                 ...exist,
  //                 qty: exist.qty - 1,
  //               }
  //             : x
  //         )
  //       )
  //     }
  //   }
  return (
    <div className='App'>
      <Header countCartItems={props.data.cartItems.length} />
      <div className='row'>
        <Main onAdd={props.addToCartHandler} products={products} />
        <Basket
          onAdd={props.addToCartHandler}
          onRemove={props.removeToCartHandler}
          cartItems={props.data.cartItems}
        />
      </div>
      <StoreDetails getStoreDetails={props.getStoreDetails} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.cartItems,
  storeDetails: state.storeDetailsReducer,
})

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
  getStoreDetails: () => dispatch(getStoreDetails()),
})

// export default App

export default connect(mapStateToProps, mapDispatchToProps)(App)
