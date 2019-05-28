import { connect } from 'react-redux';
import ItemList from './ItemsList';
import { addCartItem } from '../../../../redux/cart/cart.actions';

const mapDispatchToProps = ({
  addCartItem
});

export default connect(null, mapDispatchToProps)(ItemList)
