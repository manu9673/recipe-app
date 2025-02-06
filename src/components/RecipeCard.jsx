import React from 'react';
import placeholder from '../assets/placeholder.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../recipeSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);
  const isFavorite = favorites.includes(recipe.uri);

  return (
    <div className="card">
      <img src={recipe.image || placeholder} alt={recipe.label} />
      <div className="card-content">
        <h2>{recipe.label}</h2>
        <p>Calories: {Math.round(recipe.calories)}</p>
        <button
          className="favorite-btn"
          onClick={() => dispatch(toggleFavorite(recipe.uri))}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
