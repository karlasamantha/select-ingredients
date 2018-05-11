import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IngredientsList extends Component {
  static propTypes = {
    ingredients: PropTypes.array.isRequired
  }
  
  render() {
    return(
      <div className="ingredients">
        <h2>Selected Ingredients</h2>

        <div className="filtered-ingredients">
        </div>
      </div>
    )
  }
}

export default IngredientsList;