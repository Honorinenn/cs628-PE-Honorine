import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`Replace your API URL/recipes/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const data = await response.json();
      if (!data) {
        window.alert(`Recipe with id ${id} not found`);
        navigate("/");
        return;
      }

      setRecipe(data);
    }

    fetchRecipe();
  }, [id, navigate]);

  return (
    <div>
      {recipe ? (
        <>
          <h3>{recipe.name}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>Back to Recipes</button>
        </>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
}
