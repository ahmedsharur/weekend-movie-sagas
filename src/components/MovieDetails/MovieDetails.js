import {useSelector} from 'react-redux';
import React from 'react';

function MovieDetails (){
    const movieDetails = useSelector(store => store.selectedMovie)
    return (
        <div> 
            <h2>Details for {movieDetails.title}</h2>
            <img src={movieDetails.poster}/>
            <p> {movieDetails.description}</p>
        </div>
    )
}

export default MovieDetails;