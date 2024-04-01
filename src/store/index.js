import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/auth.slice';
import burgerIngredientsSlice from './slices/burgerIngredients.slice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        burgerIngredients: burgerIngredientsSlice
    },
})