import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = state => ({
  items: state.cart.cartItems,
  total: state.cart.total
});

export default connect(mapStateToProps)(Cart)
