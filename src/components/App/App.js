import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import AddMoviePage from "../AddMoviePage/AddMoviePage";
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route exact path="/detail">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route exact path="/moviePage">
          <AddMoviePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
