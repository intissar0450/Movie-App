import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, search, handleDelete, starrate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies
        .filter(
          (el) =>
            el.name
              .toUpperCase()
              .trim()
              .includes(search.toUpperCase().trim()) && el.rating >= starrate
        )
        .map((el) => (
          <MovieCard el={el} key={el.id} handleDelete={handleDelete} />
        ))}
    </div>
  );
};

export default MovieList;
