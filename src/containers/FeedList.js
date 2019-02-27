import React from 'react';
import './FeedList.css';
import Feedlist from '../components/FeedList'


class FeedEditor extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                currentUser: {
                    name: 'ramon',
                    feed: ['music'],
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
        getFeed() {
            let user;
            user = localStorage.getItem('currentUser') || (this.state.currentUser); // grab 
            if (typeof (user) === 'string') {
                user = JSON.parse(user)
            }
            this.setState({
                currentUser: user
            }, () => {
                localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
            })
        }

        componentDidMount() {
            this.getFeed()
            console.log(this.state)
        }

        //2.when user adds to their feed -> 
        handleFeedAdd = (e) => {
            if (e.keyCode === 13) {
                let newState = this.state;
                if(newState.currentUser.feed.indexOf(e.target.value) !== -1){
                    return alert('feed is duplicate! please check your inputs')
                }
                newState.currentUser.feed = newState.currentUser.feed.concat(e.target.value)
                e.target.value = ""
                this.setState({
                    currentUser: newState.currentUser
                }, () => {
                    localStorage.setItem(`currentUser`, JSON.stringify(this.state.currentUser))
                })
            }

        }

        handleFeedRemove = e => {
             console.log(e.target.id)
            let newState = this.state;
            let newArr = newState.currentUser.feed.slice(0,e.target.id).concat(newState.currentUser.feed.slice(e.target.id+1))
            newState.currentUser.feed = newArr
            console.log(newArr)
            // newState.currentUser.feed = newState.currentUser.feed.slice(e.target.id);
            this.setState({
                currentUser: newState.currentUser
            }, () => {
                localStorage.setItem(`currentUser`, JSON.stringify(this.state.currentUser))
            })
        }

render(){
      return( 
      <>
      <div className='row'>
      <div className='col col-6'>
      <h1>Create a new Explore Feed </h1>
      <input type='text'className='.input-sm' onKeyDown={this.handleFeedAdd}></input>
      </div>
       <Feedlist key= {'feed'}feed={this.state.currentUser} handleFeedRemove={this.handleFeedRemove}/>
      </div>

      </>
      )
  }
  }

  export default FeedEditor;