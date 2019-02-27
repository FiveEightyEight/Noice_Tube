import React, { Component } from 'react';
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
          <Route exact path='/feededitor'><FeedList /></Route>
          </Switch>
        </div>

      </>
    );
  }
}

export default App;
