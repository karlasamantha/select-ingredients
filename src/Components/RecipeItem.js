import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeItem extends Component {
  static propTypes = {
    recipe: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      cook_time: PropTypes.number,
      ingredients: PropTypes.array
    }),
    listIngredients: PropTypes.func
  }

  state = {
    toggle: false
  }

  render() {
    const { name, type, cook_time, ingredients } = this.props.recipe;
    const { toggle } = this.state;

    return (
      <div className="recipe-item">
        
        <h3 className="recipe-title">{name}</h3>
        <span className="recipe-type">{type}</span>
        <span className="recipe-time">{cook_time}min</span>
        <h4 className="ingredients-title">Ingredients</h4>
        <ul className="ingredients-list">
          {
            ingredients.map((ingredient, index) => {
              return <li key={index} className="ingredient-item">{ingredient}</li>;
            })
          }
        </ul>
      </div>
    )
  }
}

export default RecipeItem;