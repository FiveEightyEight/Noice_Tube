import React, { Component } from 'react';
import FeedList from './containers/FeedList'
import Video from './containers/Video';
import { Route, Switch } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <div>
          <Switch>
            <Route path='/video/:video_id' exact component={Video} />
            <Route exact path='/feededitor'><FeedList /></Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
