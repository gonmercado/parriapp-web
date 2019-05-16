import React from 'react';
import { withRouter } from 'react-router-dom';
import './orderHistoryList.scss';

const History = [{
  id: '1',
  date: '18/04/19',
  total: '234.25'
},{
  id: '2',
  date: '19/04/19',
  total: '334.25'
},{
  id: '3',
  date: '21/04/19',
  total: '254.05'
}];

class OrderHistoryList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      orderHistory: []
    };
    setTimeout(() => this.setState({ orderHistory: History }));
  }
  render() {
    return (
      <ul className={ 'order-history-list' }>
        {
          this.state.orderHistory.map(order => <li key={ order.id }>{ `${ order.date }  -  ${ order.total }` }</li>)
        }
      </ul>
    )
  }
}

export default OrderHistoryList;
