import React from 'react'
import { Component } from 'react';
import './Details.style.css';

class Details extends Component {
  constructor(){
    super()
    this.state ={
      movie:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.detail}?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US`)
    .then(response =>response.json())
    .then(movieres=>this.setState({movie:movieres}));
  }
 
  
  render(){
    const {movie} = this.state;
    
    console.log(movie);
    return (
      <div className='movieDetails-Container'>
        <div className='movieImg'>
         <img className='Detail_img'
         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
         alt='movie'
         />
        </div>
        <div className='movieContent'>
          <div className='movie-text'>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='tagline'>({movie.tagline})</p>
            <div className='genres'>
              <p>Genre :</p>
            {'genres' in movie ? movie.genres.map(gen=>(<p className='gen'>{gen.name}</p>)):<p></p>}
            </div>
            <div className='universal'>
              <div className='uni-text'>
              <i className="fas fa-user-friends"></i>
              <p>UNIVERSAL</p>
              </div>
              <div className='vote-text'>
              <i class="fas fa-heart"></i>
              <p>{movie.vote_average} | {movie.vote_count}</p>

              </div>
            </div>
            <p className='released'>Released</p>
            <p className='date'>Date :{movie.release_date}</p>
            <p className='languages '>Languages Spoken:</p>
            <div className='spoken-lan'>
                {'spoken_languages' in movie? movie.spoken_languages.map(len=>(<p>{len.name}</p>)):<p></p>}
            </div>
            <p className='pcontries'>Production Countries:</p>
            <div className='pcountries-list'>
                {'production_countries' in movie? movie.production_countries.map(pro=>(<p>{pro.name}</p>)):<p></p>}
            </div>
        
          </div>
          
          
         <div className='description'>
         <h6>Description :</h6>
         <p className='desc-text'>{movie.overview}</p>
         </div>
      
       
        </div>
       
      </div>
    );
    
  }
}
export default Details;

