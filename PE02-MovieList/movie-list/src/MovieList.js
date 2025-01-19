// src/MovieList.js
import React, { useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  // Movie data
  const movies = [
    { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },    
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Get unique genres
  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  // Handle genre change
  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    setFilteredMovies(
      genre === "All Genres" ? movies : movies.filter((movie) => movie.genre === genre)
    );
  };

  // Handle movie click
  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>

      {/* Genre filter dropdown */}
      <select value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Movie cards */}
      <ul className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
