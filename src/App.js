import { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header.component'

import HomePage from './Components/HomePage/HomePage.component'
import NowPlaying from './Components/NowPlaying/NowPlaying.component'
import Details from './Components/Details/Details.component'
import Upcomeing from './Components/Upcomeing/Upcomeing.component'
import Latest from './Components/Latest/Latest.component'

function App() {
  
    return (
      <div className="App">
          <Header/>
        <div className='container'>
        
          
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/NowPlaying' component={NowPlaying}/>
            <Route exact path='/details/:detail' component={Details}/>
            <Route exact path='/Upcomeing' component={Upcomeing}/>
            <Route exact path='/Latest' component={Latest}/>
          </Switch>
        </div>
      </div>
    );
  }


export default App;
