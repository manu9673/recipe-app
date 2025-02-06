import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await axios.get('https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50');
  return response.data.hits.map(hit => hit.recipe);
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    favorites: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const recipeUri = action.payload;
      if (state.favorites.includes(recipeUri)) {
        state.favorites = state.favorites.filter(uri => uri !== recipeUri);
      } else {
        state.favorites.push(recipeUri);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export const { toggleFavorite } = recipeSlice.actions;

export default recipeSlice.reducer;
