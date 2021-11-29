import Header from '../Components/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  data: state.cartItems,
})

export default connect(mapStateToProps)(Header)

// export default Home
