
import { Component } from 'react';
//import MovieList from '../MovieList/MovieList.component'
import MovieCard from '../MovieCard/MovieCard.component'

class Latest extends Component {
  constructor(){
    super()
    this.state ={
      movies:[],
    };
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/latest?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US')
    .then(response =>response.json())
    .then(movieres=>this.setState({movies:movieres}));
  }
  render(){
    const {movies} = this.state;
    console.log(movies)
    return (
      <div className="App">
        <div className='container'>
          <MovieCard movie={movies} />
        </div>
      </div>
    );
    
  }
}
export default Latest;
