import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import burgerIngredientsSlice from "./slices/burgerIngredients.slice";
import postSlice from "./slices/post.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import recipeSlice from "./slices/recipe.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recipe"],
}

const combinedReducers = combineReducers({
  auth: authSlice,
  burgerIngredients: burgerIngredientsSlice,
  post: postSlice,
  recipe: recipeSlice,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});