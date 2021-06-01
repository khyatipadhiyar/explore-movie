import './MovieCard.style.css'
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
  
  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}` } className='movieImg' alt='image'/>
      <div className='Card-heading'>
        <h3>{movie.title}</h3>
        <Link className='optionDetails' to={`/details/${movie.id}`}>
          MORE DETAILS
        </Link>
      </div>
   </div>
  )
}

export default MovieCard
