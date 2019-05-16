import React from 'react';
import queryString from 'query-string';

class CartPage extends React.Component {
  render() {
    const params = queryString.parse(this.props.history.location.search);
    return (
      <div>{ `Cart ${ params.orderId }` } </div>
    )
  }
}

export default CartPage;
