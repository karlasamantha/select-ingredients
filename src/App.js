import React, { Component } from 'react';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';

import RECIPES from './recipes.json';
import RecipeList from './Components/RecipeList';
import IngredientsList from './Components/IngredientsList';

class App extends Component {
  state = {
    ingredients: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <div className="main-wrapper">
          <RecipeList recipes={RECIPES}/>
          <IngredientsList ingredients={this.state.ingredients} />
        </div>
      </div>
    );
  }
}

export default App;
