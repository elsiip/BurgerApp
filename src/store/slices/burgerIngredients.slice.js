import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [
    {
      label: "Bread",
      price: 5000,
    },
    {
      label: "Bread",
      price: 5000,
    },
  ],
};

export const burgerIngredientsSlice = createSlice({
  name: "burgerIngredients",
  initialState,
  reducers: {},
});

export default burgerIngredientsSlice.reducer;