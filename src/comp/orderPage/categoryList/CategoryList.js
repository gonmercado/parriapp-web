import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryButton from './categoryButton/CategoryButton';
import { DRINK_CATEGORY, MEAT_CATEGORY, VEGETABLES_CATEGORY } from '../categories.constants';

const categoriesBE = [{
  id: '1',
  name: 'Carne',
  value: MEAT_CATEGORY
}, {
  id: '2',
  name: 'Bebida',
  value: DRINK_CATEGORY
}, {
  id: '3',
  name: 'Verdura',
  value: VEGETABLES_CATEGORY
}, {
  id: '4',
  name: 'Otras'
}, {
  id: '5',
  name: 'Ocio'
}];

const CategoryList = ({ onCategorySelect }) => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    setCategories(categoriesBE);
  }, []);

  const handleCategoryClick = value => onCategorySelect(value);

  return (
    <div className={ 'category-list__list' }>
      {
        categories.map(category =>
          <CategoryButton
            key={ category.id }
            category={ category }
            onCategoryClick={ handleCategoryClick } />
        )
      }
    </div>
  );
};

CategoryList.propTypes = {
  onCategorySelect: PropTypes.func.isRequired
};

export default CategoryList;
