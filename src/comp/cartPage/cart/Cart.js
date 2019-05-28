import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ total, items }) => (
  <div>
    <h3>Cart information</h3>
    <div>
      { items.map(item => (
        <div><span>{ item.nombre }</span><span>{ item.precio }</span></div>
      ))}
    </div>
    <div><span>{ `Total: ${ total}` }</span></div>
  </div>
);

Cart.propTypes = {
  total: PropTypes.number,
  items: PropTypes.array
};

Cart.defaultProps = {
  total: 0,
  items: []
}

export default Cart;
