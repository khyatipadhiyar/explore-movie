import './MovieList.style.css';
import MovieCard from '../MovieCard/MovieCard.component'

const MovieList = ({movies}) => {
  return (
    <div className='movie-container'>
     {movies.map(movie =>(
       <MovieCard key={movie.id} movie={movie} />
     ))}
    </div>
  )
}

export default MovieList
