import { Component } from 'react';
import MovieList from '../MovieList/MovieList.component'
import Search from '../Search/Search.component'

class HomePage extends Component {
  constructor(){
    super()
    this.state ={
      movies:[]
    };
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1')
    .then(response =>response.json())
    .then(movieres=>this.setState({movies:movieres.results}));
  }
  handleclick = (e)=>{
    if(e.target.value!==''){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
      .then(response =>response.json())
      .then(movieres=>this.setState({movies:movieres.results}));
    }
  }
  render(){
    const {movies} = this.state;
   
    return (
      <div className="App">
        <div className='container'>
          <Search  handleclick={this.handleclick}/>
          <MovieList movies={movies} />
        </div>
      </div>
    );
    
  }
}
export default HomePage;
