import React from 'react';
import PropTypes from 'prop-types';
import ItemDescription from './itemDescription/ItemDescription';

const ItemList = ({ items, addCartItem }) => {
  const handleItemCountChange = (item, operation) => {
    if(operation === 'ADD') {
      addCartItem(item);
    }
  }
  return (
    <div className={ 'items-list' }>
      {
        items.map(item => (
          <ItemDescription key={ item.id } item={ item } onItemCountChange={ handleItemCountChange } />
        ))
      }
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
  addCartItem: PropTypes.func.isRequired
};

ItemList.defaultProps = {
  items: []
};

export default ItemList;
