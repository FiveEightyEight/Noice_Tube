import React, { Component } from 'react';
import User from './containers/User'
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
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
       
        <Switch>
        <Route path='/' exact={true}>
        <div className='row'>
            <div className='mx-auto align-self-center'>
              <VideoPlayer id='MmOpzbBsr8E' />
            </div>
          </div>
        </Route>
        </Switch>
          
        <Switch>
          <Route exact path='/user' ><User /></Route>
          </Switch>
      </>
    );
  }
}

export default App;






/*
------------------------------------------------------------------------------RICH
removeUser = (e) =>{
    let userList = this.state.userList
    let removeUser = e.target.id
    console.log(this.state.currentUser)
    let remove = userList.slice(0, removeUser).concat(userList.slice(removeUser+1))
     this.setState({userlist: remove},()=>{
       return
         console.log('this is the',this.state.userList)
     })
}
*/