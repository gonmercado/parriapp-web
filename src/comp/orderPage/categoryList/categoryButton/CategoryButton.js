import React from 'react';
import PropTypes from 'prop-types';

const CategoryButton = ({ category, onCategoryClick }) => (
  <div onClick={ () => { onCategoryClick(category.value); } }>{ category.name }</div>
);

CategoryButton.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  onCategoryClick: PropTypes.func.isRequired
};

export default CategoryButton;
