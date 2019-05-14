import React from 'react';
import CategoryButton from './categoryButton/CategoryButton';

const categoriesBE = [{
  id: '1',
  name: 'Carne'
}, {
  id: '2',
  name: 'Bebida'
}, {
  id: '3',
  name: 'Verdura'
}, {
  id: '4',
  name: 'Otras'
}, {
  id: '5',
  name: 'Ocio'
}];

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };

    setTimeout(() => {
      this.setState({ categories: categoriesBE })
    }, 1000)
  };

  handleCategoryClick = name => {
    console.log(name);
  };

  render() {
    return (
      <div className={ 'category-list__list' }>
        {
          this.state.categories.map(category =>
            <CategoryButton
              key={ category.id }
              category={ category }
              onCategoryClick={ this.handleCategoryClick } />
          )
        }
      </div>
    );
  }
}

export default CategoryList;
