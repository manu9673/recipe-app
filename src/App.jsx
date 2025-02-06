import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from './recipeSlice';
import { store } from './store';
import { Provider } from 'react-redux';
import RecipeCard from './components/RecipeCard';
import './styles.css';

function RecipeApp() {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Recipe App</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.uri} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <RecipeApp />
    </Provider>
  );
}
