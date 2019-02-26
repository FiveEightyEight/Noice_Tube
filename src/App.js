import React, { Component } from 'react';
import FeedList from './containers/FeedList'
import {Route,Link,Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <>
        <h1>Hello World</h1>
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
