import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const movieDetail = useSelector((store) => store.selectedMovie);
  const history = useHistory();

  const addMovieToPage = () => {
    // dispatch({ type: "ADD_MOVIE_PAGE", payload: movie });
    history.push("/moviePage");
  };
  function backToList() {
    history.push("/");
  }
  return (
    <div>
      <h2>Details for {movieDetail.title}</h2>
      <img src={movieDetail.poster} />
      <p> {movieDetail.description}</p>
      <button onClick={addMovieToPage}>Add Movie</button>
      <button onClick={backToList}>Back To List</button>
    </div>
  );
}

export default MovieDetails;
