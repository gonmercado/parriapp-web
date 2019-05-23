import React from 'react';
import PropTypes from 'prop-types';
import ItemDescription from './itemDescription/ItemDescription';

const ItemList = ({ items }) => {
  return (
    <div className={ 'items-list' }>
      {
        items.map(item => (
          <ItemDescription key={ item.id } { ...item } />
        ))
      }
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};

ItemList.defaultProps = {
  items: []
};

export default ItemList;
