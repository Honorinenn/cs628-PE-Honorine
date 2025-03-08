import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddRecipe() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: "",
    servings: "",
    category: "",
  });
  const navigate = useNavigate();

  // Updates form state
  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  // Handles form submission
  async function onSubmit(e) {
    e.preventDefault();

    const newRecipe = { ...form, ingredients: form.ingredients.split(",") };

    await fetch("https://special-succotash-jw47j6jvx9jfr4x-5050.app.github.dev/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", ingredients: "", instructions: "", cookTime: "", servings: "", category: "" });
    navigate("/");
  }

  return (
    <div>
      <h3>Add New Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            value={form.ingredients}
            onChange={(e) => updateForm({ ingredients: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            className="form-control"
            id="instructions"
            rows="3"
            value={form.instructions}
            onChange={(e) => updateForm({ instructions: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cookTime">Cook Time (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="cookTime"
            value={form.cookTime}
            onChange={(e) => updateForm({ cookTime: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="servings">Servings</label>
          <input
            type="number"
            className="form-control"
            id="servings"
            value={form.servings}
            onChange={(e) => updateForm({ servings: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
