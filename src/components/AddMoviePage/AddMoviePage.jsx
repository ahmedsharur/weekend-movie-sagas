import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddMoviePage() {
  const [movieTitle, setMovieTitle] = useState([]);
  const [moviePoster, setMoviePoster] = useState([]);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        required
        type="text"
        placeholder="Title"
        value={movieTitle}
        onChange={(event) => setMovieTitle(event.target.value)}
      />

      <input
        required
        type="text"
        placeholder="Poster"
        value={moviePoster}
        onChange={(event) => setMoviePoster(event.target.value)}
      />

      <textarea type="text" placeholder="TextArea">
        {" "}
      </textarea>

      <button class="dropbtn">Dropdown</button>
    </div>
  );
}

export default AddMoviePage;
