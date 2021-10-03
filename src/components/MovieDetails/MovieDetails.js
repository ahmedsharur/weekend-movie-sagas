import {useSelector} from 'react-redux';


function MovieDetails (){
    const movieDetails = useSelector(store => store.selectedMovie)
    return (
        <div> 
            <h2>Details for {movieDetails.title}</h2>
            <div>{JSON.stringify(movieDetails)}</div>
        </div>
    )
}

export default MovieDetails;