import React from 'react';
import './FeedList.css';
import { stat } from 'fs';

class FeedEditor extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        currentUser: {
          name:'ramon',
           feed:['music'],
        }
      }
    }
    
    /*
      components 
      FeedList - Pill Badge with click handler
      Input form - for adding feed to user.
    */
    
   /* APP LOGIC
   1.pull feed from localStorage 
   */
     getFeed(){
         let user;
           user = localStorage.getItem('currentUser') ||(this.state.currentUser) ;// grab 
           if (typeof(user) === 'string'){
           user =  JSON.parse(user)
           }
            this.setState({currentUser:user},()=>{
            localStorage.setItem('currentUser',JSON.stringify(this.state.currentUser))
    })
    }
      
   componentDidMount(){
     this.getFeed()
     console.log(this.state)
   }
   
   //2.when user adds to their feed -> 
   handleFeedAdd = (e) => {
       if (e.keyCode === 13){
        let newState = this.state;
    newState.currentUser.feed = newState.currentUser.feed.concat(e.target.value)
    this.setState({
      currentUser:newState.currentUser
    },()=>{
        localStorage.setItem(`currentUser`,JSON.stringify(this.state.currentUser))
  })
       }
       
}

   
  render(){
      return( 
      <>
      <div className='row offset-6'>
      <p>{this.state.currentUser.name}</p>
      <input type='text'className='input-group mb-3' onKeyDown={this.handleFeedAdd}></input>

      </div>

      </>
      )
  }
  }

  export default FeedEditor;