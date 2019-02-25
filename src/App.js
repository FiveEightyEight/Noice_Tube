import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Video from './containers/Video';

class App extends Component {

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Route path='/video/:video_id' exact component={Video} />

      </>
    );
  }
}

export default App;
