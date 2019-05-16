import React from 'react';
import OrderHistoryList from './orderHistoryList/OrderHistoryList';

class OrderHistoryPage  extends React.Component {
  render () {
    return (
      <div>
        <h3>Order History Page</h3>
        <OrderHistoryList />
      </div>
    )
  }
}

export default OrderHistoryPage;
