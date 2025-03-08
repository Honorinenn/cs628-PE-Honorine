import React from "react";
import { Route, Routes } from "react-router-dom"; // No need for BrowserRouter here
import "bootstrap/dist/css/bootstrap.css";


import Navbar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipe from "./components/EditRecipe";
import CreateRecipe from "./components/CreateRecipe";

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
          <Route path="/create" element={<CreateRecipe />} />
        </Routes>
      </div>
  );
};

export default App;
