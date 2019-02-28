import React, { Component } from 'react';
import User from './containers/User'
import {Route,Switch} from 'react-router-dom'
import SearchContainer from './containers/SearchContainer'
import FeedList from './containers/FeedList'
import NavBar from './components/NavBar'
import {Route,Link,Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <>
      <NavBar></NavBar>
        <div>
          <Switch>
            <Route exact path='/user'><User /></Route>
            <Route exact path='/search/:search_query'><SearchContainer /></Route>
            <Route path='/video/:video_id' exact component={Video} />
            <Route exact path='/feededitor'><FeedList /></Route>
          </Switch>
        </div>

      </>
    );
  }
}

export default App;



