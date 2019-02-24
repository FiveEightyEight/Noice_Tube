import React from 'react';
import './FeedList.css';

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
   /*
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
  render(){
      return(<>
      <div className='row offset-6'>
      <p>{this.state.currentUser.name}</p>

      </div>
      </>
      )
  }
  }

  export default FeedEditor;