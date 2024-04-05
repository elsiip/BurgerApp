import React from 'react';
import RecipeCard from './recipeCard';
import { useSelector } from 'react-redux';

export default function RecipeContainer() {
    const { listOfRecipe } = useSelector(state => state.recipe);

    return (
        <div>
            <h1 className="mb-12 text-2xl font-bold text-center">LIST OF ALL RECIPES</h1>
            <div className='grid grid-cols-3 gap-8'>
                {listOfRecipe.map((item, i) => (
                    <div className="bg-white rounded-lg shadow-md p-4" key={i}>
                        <RecipeCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}