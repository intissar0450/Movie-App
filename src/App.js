import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { moviesInfo } from "./moviesData";
import { useState } from "react";
import NavFilter from "./components/NavFilter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  //---------------------------------states------------------------------
  const [movies, setMovies] = useState(moviesInfo);
  const [search, setSearch] = useState("");
  const [starrate, setStarrate] = useState(1);

  console.log(movies);

  //-------------------------------functions-------------------------------

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleDelete = (movieID) => {
    setMovies(movies.filter((el) => el.id !== movieID));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleRating = (x) => {
    setStarrate(x);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavFilter
          search={search}
          handleSearch={handleSearch}
          starrate={starrate}
          handleRating={handleRating}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                search={search}
                handleDelete={handleDelete}
                starrate={starrate}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
        <AddMovie handleAdd={handleAdd} />
      </BrowserRouter>
    </div>
  );
}

export default App;
