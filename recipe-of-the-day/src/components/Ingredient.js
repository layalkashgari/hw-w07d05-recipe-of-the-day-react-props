import React from 'react';


const Ingredient = (props) => {
    const postingredients = props.ingredient;
    return (
        <div className="Ingredient">
            <ul>
                <li>Ingredient: {postingredients.ingredient}</li>
                <li>Amount: {postingredients.amount}</li>
            </ul>
        </div>
    )
}

export default Ingredient;