import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IngredientsList extends Component {
  static propTypes = {
    ingredients: PropTypes.array
  }
  
  render() {
    return(
      <div className="ingredients-wrapper col-xs-6">
        <div className="ingredients">
          <h2>Selected Ingredients</h2>
          <ul className="filtered-ingredients">
            {
              Object.keys(this.props.ingredients).map(key => (
                <li key={key}>{this.props.ingredients[key]}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default IngredientsList;