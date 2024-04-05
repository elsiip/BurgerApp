import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfPosts: [],
  listOfFavoritesPosts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setListOfPosts(state, action) {
      state.listOfPosts = action.payload;
    },
    setListFavoritePosts(state, action) {
      state.listOfFavoritesPosts = action.payload;
    },
  },
});

export const { setListOfPosts, setListFavoritePosts } = postSlice.actions;

export default postSlice.reducer;