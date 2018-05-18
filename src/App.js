import React, { Component } from 'react';
import './App.css';
import RECIPES from './recipes.json';
import RecipeItem from './Components/RecipeItem';
import IngredientsList from './Components/IngredientsList';

class App extends Component {
  state = {
    ingredients: []
  }

  listIngredients = (ingredients, event) => {
    let filteredList = [];
    const isChecked = event.target.checked;
    let newList = [...this.state.ingredients, ...ingredients];
    
    if (isChecked) {
      filteredList = [...(new Set(newList))];
    } else {
      filteredList = newList.filter(ingredient => ingredients.indexOf(ingredient) === -1);
    }

    this.setState({ ingredients: filteredList.sort() })
  }

  render() {
    const recipes = RECIPES;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="main-wrapper">
              <div className="recipe-list col-xs-6">
                {
                  recipes.map((recipe, index) => {
                    return <RecipeItem 
                        key={index}
                        recipe={recipe}
                        listIngredients={this.listIngredients}
                      />
                  })
                }
              </div>
              <IngredientsList ingredients={this.state.ingredients} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
