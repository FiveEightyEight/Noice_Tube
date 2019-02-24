import React, { Component } from 'react';
import FeedList from './components/FeedList'

const VideoPlayer = ({ id }) => {
  const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;

  return (
    <iframe title='yt-video' type="text/html" width="640" height="360"
      src={link} frameBorder="0"></iframe>
  );
}

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
          <FeedList lol={'lol'}></FeedList>
        </div>

      </>
    );
  }
}

export default App;
