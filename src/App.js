import React, { Component } from 'react';
import User from './containers/User'
import {Route, Switch} from 'react-router-dom'
import SearchContainer from './containers/SearchContainer'
import Video from './containers/Video'
import FeedList from './containers/FeedList'
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar'
import FooterBar from './components/Footer'
import './App.css'

class App extends Component {

  render() {
    return (
      <>
      <NavBar></NavBar>
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/'><HomeContainer/></Route>
            <Route exact path='/user'component={User} />
            <Route exact path='/search/:search_query'><SearchContainer /></Route>
            <Route path='/video/:video_id' exact component={Video} />
            <Route exact path='/feededitor' component={FeedList} />
          </Switch>
        </div>
      <FooterBar/>
      </>
    );
  }
}

export default App;



