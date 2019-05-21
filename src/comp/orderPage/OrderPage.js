import React from 'react';
import Category from './category/Category';
import Summary from './summary/Summary';
import CategoryList from './categoryList/CategoryList';
import './orderPage.scss';
import { MEAT_CATEGORY } from './categories.constants';

class OrderPage extends React.Component {
  state = {
    selectedCategory: MEAT_CATEGORY
  };

  handleCategorySelect = selectedCategory => {
    this.setState({ selectedCategory })
  };

  render() {
    return (
      <div className={ 'order-page__main-container' }>
        <Category category={ this.state.selectedCategory } />
        <Summary />
        <CategoryList onCategorySelect={ this.handleCategorySelect } />
      </div>
    )
  }
}

export default OrderPage;

