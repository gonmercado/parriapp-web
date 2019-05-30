import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemDescription from './itemDescription/ItemDescription';
import { cartContext } from '../../../../cartProvider';
import { ADD_CART_ITEM } from '../../../../redux/cart/cart.constants';

const ItemList = ({ items, addCartItem }) => {
  const { cartDispatch } = useContext(cartContext);

  const handleItemCountChange = (cartItem, operation) => {
    if(operation === 'ADD') {
      cartDispatch({ type: ADD_CART_ITEM, cartItem });
      // addCartItem(cartItem);
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
  // addCartItem: PropTypes.func.isRequired
};

ItemList.defaultProps = {
  items: []
};

export default ItemList;
