import React, { Component } from 'react';
import User from './containers/User'
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";



class App extends Component {

  render() {
    return (
      <>
      <div>
          <Switch>
          <Route exact path='/user'><User /></Route>
          </Switch>
      </div> 
      </>
    );
  }
}

export default App;






