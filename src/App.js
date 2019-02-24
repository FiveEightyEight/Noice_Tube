import React, { Component } from 'react';
import FeedList from './components/FeedList'


class App extends Component {

  render() {
    return (
      <>
        <h1>Hello World</h1>


        <div>
          <FeedList lol={'lol'}></FeedList>
        </div>

      </>
    );
  }
}

export default App;
