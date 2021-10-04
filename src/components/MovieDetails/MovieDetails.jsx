import React from 'react';
import {useSelector} from 'react-redux';

function MovieDetails (){
    const movieDetail = useSelector(store => store.selectedMovie)
     
    return (
        <div> 
            <h2>Details for {movieDetail.title}</h2>
            <img src={movieDetail.poster}/>
            <p> {movieDetail.description}</p>
            <p>{console.log('movie title  is ', movieDetail.title)}</p>
        </div>
    )}

export default MovieDetails;