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
           let user = JSON.parse(localStorage.getItem('currentUser')) || this.state.currentUser;
            localStorage.setItem('currentUser',JSON.stringify(user));
            this.setState({
                currentUser: user
            })
        }

        componentDidMount() {
            this.getFeed()
        }
        updateUserList(user){
            // let user = this.state.currentUser;
            // GRAB FROM LOCAL STORAGE USERLIST
           let  userList = JSON.parse(localStorage.getItem('userList')) || [];
           console.log(userList, 'USERLIST')
           if (userList === undefined){
               return;
           }
            for (let i = 0 ; i < userList.length; i++){
              if(user.name === userList[i].name){
                  userList[i] = user;
                  break;
              }
              if (i === userList.length-1){
                  userList.push(user);
              }
            }  
            localStorage.setItem('userList',JSON.stringify(userList))
        }

        //2.when user adds to their feed -> 
        handleFeedAdd = (e) => {
            if (e.keyCode === 13) {
                let newState = this.state;
                if(newState.currentUser.feed.indexOf(e.target.value) !== -1){
                    return alert('feed is duplicate! please check your inputs')
                }
                // UPDATE USERLIST 
                // FIND CURR USER in FEED LIST AND UPDATE
                newState.currentUser.feed = newState.currentUser.feed.concat(e.target.value)
                this.updateUserList(newState.currentUser);
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
            // UPDATE USERLIST 
            // FIND CURR USER in FEED LIST AND UPDATE
            this.updateUserList(newState.currentUser);
            localStorage.setItem(`currentUser`, JSON.stringify(this.state.currentUser))
            this.setState({
                currentUser: newState.currentUser
            })
        }
        componentDidUpdate(p, s){
            console.log('Previous State: ', s)
            console.log('Current State: ', this.state)
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