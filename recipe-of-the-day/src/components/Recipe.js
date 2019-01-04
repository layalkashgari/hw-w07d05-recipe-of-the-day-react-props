import React from 'react';

const Recipe = (props) => {
    const postRecipes = props.recipes;
    console.log(postRecipes);
    return (
        <div className="Recipe">
            <h3>Name: {postRecipes.name}</h3>
            <h3>Servings: {postRecipes.servings}</h3>
            <h3>Category: {postRecipes.category}</h3>
        </div>
    )
}

export default Recipe;