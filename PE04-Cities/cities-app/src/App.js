// src/App.js
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";

const App = () => {
  const [cities, setCities] = useState([
    //{ id: 1, name: "Seattle", country: "USA", population: "733,919" },
    //{ id: 2, name: "New York", country: "USA", population: "8,468,153" }
  ]);

  const addCity = (city) => {
    setCities([...cities, { id: cities.length + 1, ...city }]);
  };

  return (
    <div className="app-container">
      <h1>Cities Application</h1>
      <nav>
        <NavLink to="/">Cities List</NavLink>
        <NavLink to="/add-city">Add City</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<CitiesList cities={cities} />} />
        <Route path="/add-city" element={<AddCity addCity={addCity} />} />
        <Route path="/city/:id" element={<CityDetails cities={cities} />} />
      </Routes>
    </div>
  );
};

export default App;
