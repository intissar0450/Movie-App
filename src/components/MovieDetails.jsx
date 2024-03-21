import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const params = useParams();
  const movie = movies.find((el) => el.id === Number(params.id));
  return (
    <div>
      <h1>{movie.name}</h1>
    </div>
  );
};

export default MovieDetails;
