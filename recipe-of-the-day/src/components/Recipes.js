import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {

    renderRecipes() {
        const postRecipes = recipes.map((post, index) => {
            return (
                <Recipe recipes={post} key={index}/>
            );
        });
        return postRecipes;
    }

    render() {
        return (
            <div className="Recipes">
                <h1 className="title">Recipes</h1>
                {this.renderRecipes()};
            </div>
        );
    }
}

export default Recipes;