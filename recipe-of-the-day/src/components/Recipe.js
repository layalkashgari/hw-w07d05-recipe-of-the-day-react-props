import React from 'react';

const Recipe = (props) => {
    const postRecipes = props.recipes;
    console.log(postRecipes);
    return (
        <div className="Recipe">
            <p>Name: {postRecipes.name}</p>
            <p>Servings: {postRecipes.servings}</p>
            <p>Category: {postRecipes.category}</p>
        </div>
    )
}

export default Recipe;