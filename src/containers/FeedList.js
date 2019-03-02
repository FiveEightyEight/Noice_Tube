import React from 'react';
import './FeedList.css';
import Feedlist from '../components/FeedList'


class FeedEditor extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                currentUser: {
                    name: 'default',
                    feed: ['music'],
                }
            }
        }
        getFeed() {
            let user;
            user = localStorage.getItem('currentUser');
            console.log(user, 'user in feedlist')
            if(!user){
                user = this.state.currentUser;
            } // grab 
            if (typeof (user) === 'string') {
                user = JSON.parse(user)
            }
            this.setState({
                currentUser: user
            })
        }

        componentDidMount() {
            this.getFeed()
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
                localStorage.setItem(`currentUser`, JSON.stringify(newState.currentUser))
                this.setState({
                    currentUser: newState.currentUser
                })
            }

        }

        handleFeedRemove = e => {
            let id = parseInt(e.target.id);
            let newState = this.state;
            let newArr = newState.currentUser.feed.slice(0,id).concat(newState.currentUser.feed.slice(id+1))
            newState.currentUser.feed = newArr
            localStorage.setItem(`currentUser`, JSON.stringify(this.state.currentUser))
            this.setState({
                currentUser: newState.currentUser
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