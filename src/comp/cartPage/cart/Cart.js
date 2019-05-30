import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { cartContext } from '../../../cartProvider';

const Cart = ({ total }) => {
  const { cartState: { cartItems } } = useContext(cartContext);
  return (
    <div>
      <h3>Cart information</h3>
      <div>
        { cartItems.map(item => (
          <div><span>{ item.nombre }</span><span>{ item.precio }</span></div>
        ))}
      </div>
      <div><span>{ `Total: ${ total}` }</span></div>
    </div>
  );
}

Cart.propTypes = {
  total: PropTypes.number,
  // items: PropTypes.array
};

Cart.defaultProps = {
  total: 0,
  items: []
}

export default Cart;
