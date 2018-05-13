import React, { Component } from 'react';
import './App.css';
import RECIPES from './recipes.json';
import RecipeItem from './Components/RecipeItem';
import IngredientsList from './Components/IngredientsList';

class App extends Component {
  state = {
    ingredients: []
  }

  listIngredients = (ingredients, key) => {
    let newList = [...this.state.ingredients, ...ingredients];
    let filteredList = [...(new Set(newList))];
    this.setState({ ingredients: filteredList.sort()})
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
            <div className="main-wrapper col-xs-12">
              <div className="recipe-list col-xs-6">
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
        </div>
      </div>
    );
  }
}

export default App;
