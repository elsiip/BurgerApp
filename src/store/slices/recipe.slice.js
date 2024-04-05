import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    listOfRecipe: [],
    searchedRecipe: [],
    recipeDetail: null
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers:{
        setListOfRecipe(state, action){
            state.listOfRecipe = action.payload;
        },
        searchRecipeByTitle(state, action){
            state.searchedRecipe = state.listOfRecipe.filter(recipe => recipe.title.includes(action.payload));
        },
        getRecipeDetail(state, action){
            state.recipeDetail = state.listOfRecipe.find(recipe => recipe.id === action.payload);
        }
    }
})

export const {setListOfRecipe, searchRecipeByTitle, getRecipeDetail} = recipeSlice.actions;

export default recipeSlice.reducer;