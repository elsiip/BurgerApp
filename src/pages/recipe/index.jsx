import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeContainer from './recipeContainer';
import { useDispatch } from 'react-redux';
import { setListOfRecipe } from '../../store/slices/recipe.slice';
import { useFetch } from '../../utils/useFetch';

export default function Recipe() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const { fetcher, isLoading, data } = useFetch();

    useEffect(() => {
        fetcher(`/recipe?query=${searchTerm}`);
    }, [searchTerm]);

    useEffect(() => {
        if (data) {
            dispatch(setListOfRecipe(data));
        }
    }, [data, dispatch]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <main className='container mx-auto'>
            <div className="mt-8 mb-4 flex justify-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search recipe..."
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>
            <RecipeContainer />
        </main>
    );
}