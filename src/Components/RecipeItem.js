import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeItem extends Component {
  static propTypes = {
    recipe: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      cook_time: PropTypes.number.isRequired,
      ingredients: PropTypes.array.isRequired
    })
  }

  listIngredients = (evt) => {
    evt.preventDefault();

    console.log(evt.target)
  }

  render() {
    const { name, type, cook_time, ingredients } = this.props.recipe;

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