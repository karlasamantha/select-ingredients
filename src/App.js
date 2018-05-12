import React, { Component } from 'react';
import './App.css';
import RECIPES from './recipes.json';
import RecipeItem from './Components/RecipeItem';
import IngredientsList from './Components/IngredientsList';

class App extends Component {
  state = {
    ingredients: []
  }

  listIngredients = (ingredients) => {
    this.setState({ ingredients: ingredients})
  }

  render() {
    const recipes = RECIPES;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <div className="main-wrapper">
          <div className="recipe-list">
            {
              recipes.map((recipe, index) => {
                return <RecipeItem 
                    key={index}
                    index={index}
                    recipe={recipe}
                    listIngredients={this.listIngredients}
                  />
              })
            }
          </div>
          <IngredientsList 
            ingredients={this.state.ingredients} />
        </div>
      </div>
    );
  }
}

export default App;
