import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  }
  
  render() {
    const { recipes } = this.props;

    return (
      <div className="recipe-list">
        {Object.keys(recipes).map(key => (
          <RecipeItem 
            key={key} 
            recipe={recipes[key]} />
        ))}
      </div>
    )
  }
}

export default RecipeList;