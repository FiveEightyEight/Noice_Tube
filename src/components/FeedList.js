import React, {Component} from 'react';
import './FeedList.css';

class FeedEditor extends React.component{
    constructor(props){
      super(props)
      this.state = {
        currentUser: {
          name:'default',
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
     getFeed(){
        user = localStorage.getItem(currentUser) // grab 
        if(!user){
            user = this.state.currentUser
        }
        this.setState({currentUser:user})
   }
   componentDidMount(){
     this.getFeed()
   }
   2.when user adds to their feed -> 
   handleFeedAdd(e) 
       newFeed = this.state.feed.concat(e.target.value)
       this.setState({
         feed:newFeed
      },()=>{
      localstorage.setItem(CurrentUser,this.state.currentUser) 
     })
   }
  
   
   */
  }

  export default FeedEditor;