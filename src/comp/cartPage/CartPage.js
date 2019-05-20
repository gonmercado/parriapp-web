import React from 'react';
import queryString from 'query-string';
import Cart from './cart/Cart';

class CartPage extends React.Component {
  render() {
    const params = queryString.parse(this.props.history.location.search);
    return (
      <Cart />
    )
  }
}

export default CartPage;
