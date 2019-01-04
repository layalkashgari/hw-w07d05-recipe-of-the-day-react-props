import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component {

     renderIngredients(){
        const postRecipeOfTheDay = recipeOfTheDay.ingredients.map((post, index) => {
            return (
                <Ingredient ingredient={post} key={index}/>
            )
        });
        return postRecipeOfTheDay;
    };

    render() {
      return (
        <div className="header">
            <h1 className="title">Recipe of the Day</h1>
            <h2>{recipeOfTheDay.name}</h2>
            <h2>Description:</h2>
            <h2>{recipeOfTheDay.description}</h2>
            <h2>Ingredient</h2>
            {this.renderIngredients()}
        </div>
      );
    }
  }
  
  export default RecipeOfTheDay;