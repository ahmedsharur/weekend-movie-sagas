import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieListItem from "../MovieListItem/MovieListItem";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    // dispatch an action to request the movieList from the API
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div>
              <MovieListItem key={movie.id} movie={movie} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
