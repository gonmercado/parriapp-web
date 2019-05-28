import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ItemDescription = ({ item, onItemCountChange }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleSubsCantidad = () => {
    setCantidad(cantidad - 1);
    onItemCountChange(item, 'ADD');
  };

  const handleAddCantidad = () => setCantidad(cantidad + 1);

  const { nombre, precio } = item;

  return (
    <div className={ 'item-description' }>
      <p>{ nombre }</p>
      <p>{ precio }</p>
      <div className={ 'item-description__buttons' }>
        <button onClick={ handleAddCantidad }>-</button>
        <p>{ cantidad }</p>
        <button onClick={ handleSubsCantidad }>+</button>
      </div>
    </div>
  )
};

ItemDescription.propTypes = {
  item: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  onItemCountChange: PropTypes.func.isRequired
};

export default ItemDescription;
