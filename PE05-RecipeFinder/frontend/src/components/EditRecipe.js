import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditRecipe() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: "",
    servings: "",
    category: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`https://literate-spork-xr67g955xqj2v54w-3000.app.github.dev/recipe/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipe = await response.json();
      if (!recipe) {
        window.alert(`Recipe with ID ${id} not found`);
        navigate("/");
        return;
      }

      setForm(recipe);
    }

    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedRecipe = { ...form, ingredients: form.ingredients.split(",") };

    await fetch(`hhttps://special-succotash-jw47j6jvx9jfr4x-5050.app.github.dev/recipe/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedRecipe),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  return (
    <div>
      <h3>Update Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (comma-separated): </label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            value={form.ingredients}
            onChange={(e) => updateForm({ ingredients: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions: </label>
          <textarea
            className="form-control"
            id="instructions"
            rows="3"
            value={form.instructions}
            onChange={(e) => updateForm({ instructions: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cookTime">Cook Time (minutes): </label>
          <input
            type="number"
            className="form-control"
            id="cookTime"
            value={form.cookTime}
            onChange={(e) => updateForm({ cookTime: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="servings">Servings: </label>
          <input
            type="number"
            className="form-control"
            id="servings"
            value={form.servings}
            onChange={(e) => updateForm({ servings: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
