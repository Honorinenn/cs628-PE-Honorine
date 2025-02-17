// src/components/AddCity.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCity = ({ addCity }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({ name, country, population });
    navigate("/"); // Redirect to Cities List
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        <input type="text" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} required />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;