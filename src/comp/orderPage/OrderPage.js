import React from 'react';
import Category from './category/Category';
import Summary from './summary/Summary';
import CategoryList from './categoryList/CategoryList';
import './orderPage.scss';

class OrderPage extends React.Component {
  render() {
    return (
      <div className={ 'order-page__main-container' }>
        <Category />
        <Summary />
        <CategoryList />
      </div>
    )
  }
}

export default OrderPage;

