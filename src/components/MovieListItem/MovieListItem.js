import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function MovieListItem(movie) {
  const dispatch = useDispatch();
  const history = useHistory();

  const viewMovieDetails = () => {
    dispatch({ type: "FETCH_MOVIE_DETAILS", payload: movie });
    history.push('/detail')
  };

  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} /><button onClick={viewMovieDetails}>View Details</button>
    </div>
  );
}

export default MovieListItem;
