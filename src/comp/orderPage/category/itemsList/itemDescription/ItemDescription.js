import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ItemDescription = ({ nombre, precio, id }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleSubsCantidad = () => setCantidad(cantidad - 1);

  const handleAddCantidad = () => setCantidad(cantidad + 1);

  return (
    <div className={ 'item-description' }>
      <p>{ nombre }</p>
      <p>{ precio }</p>
      <div className={ 'item-description__buttons' }>
        <button onClick={ handleAddCantidad }>+</button>
        <p>{ cantidad }</p>
        <button onClick={ handleSubsCantidad }>-</button>
      </div>
    </div>
  )
};

ItemDescription.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default ItemDescription;
