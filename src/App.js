import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import SearchContainer from './containers/SearchContainer'
import FeedList from './containers/FeedList'
import Video from './containers/Video';



class App extends Component {

  render() {
    return (
      <>
        <h1>Hello World</h1>
          <div className='row'>
            <div className='mx-auto align-self-center'>
              <VideoPlayer id='MmOpzbBsr8E' />
            </div>
          </div>
          <div>
          <Switch>
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

//<Route exact path='/feededitor'><FeedEditor /></Route>

