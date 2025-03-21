import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipe = (props) => (
  <tr>
    <td>{props.recipe.name}</td>
    <td>{props.recipe.ingredients.join(", ")}</td>
    <td>{props.recipe.instructions}</td>
    <td>{props.recipe.cookTime}</td>
    <td>{props.recipe.servings}</td>
    <td>{props.recipe.category}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.recipe._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecipe(props.recipe._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the database
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("https://legendary-couscous-67r5969qjrqc4qjj-5050.app.github.dev/recipe");
      console.log(response.text)
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();
  }, [recipes.length]);

  // Delete a recipe
  async function deleteRecipe(id) {
    await fetch(`https://legendary-couscous-67r5969qjrqc4qjj-5050.app.github.dev/recipe/${id}`, {
      method: "DELETE",
    });

    const newRecipes = recipes.filter((el) => el._id !== id);
    setRecipes(newRecipes);
  }

  // Render the recipe list
  function recipeList() {
    return recipes.map((recipe) => {
      return (
        <Recipe
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe._id)}
          key={recipe._id}
        />
      );
    });
  }

  return (
    <div>
      <h3>Recipe List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>CookTime</th>
            <th>Servings</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recipeList()}</tbody>
      </table>
    </div>
  );
}
