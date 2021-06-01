import { Component } from 'react';
import MovieList from '../MovieList/MovieList.component'


class Upcomeing extends Component {
  constructor(){
    super()
    this.state ={
      movies:[],
    };
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1')
    .then(response =>response.json())
    .then(movieres=>this.setState({movies:movieres.results}));
  }
  render(){
    const {movies} = this.state;
    console.log(movies)
    return (
      <div className="App">
        <div className='container'>
          <MovieList movies={movies} />
        </div>
      </div>
    );
    
  }
}
export default Upcomeing;
