import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Summary = ({ history }) => {
  const handleShowCartClick = () => {
    history.push(`/show-cart?orderId=233`);
  };

  return (
    <div><button onClick={ handleShowCartClick }>Carrito de compras</button></div>
  );
};

Summary.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Summary);
