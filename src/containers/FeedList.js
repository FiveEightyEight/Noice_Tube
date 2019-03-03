import React from 'react';
import './FeedList.css';
import Feedlist from '../components/FeedList'


class FeedEditor extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                inputValue:'',
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
                let newState = this.state;
                if(newState.currentUser.feed.includes(this.state.inputValue)){
                    return alert('feed is duplicate! please check your inputs')
                }
                // UPDATE USERLIST 
                // FIND CURR USER in FEED LIST AND UPDATE
                newState.currentUser.feed = newState.currentUser.feed.concat(this.state.inputValue)
                this.updateUserList(newState.currentUser);
                e.target.value = ""
                localStorage.setItem(`currentUser`, JSON.stringify(newState.currentUser))
                this.setState({
                    currentUser: newState.currentUser
                })
            

        }

        handleFeedRemove = e => {
            let id = parseInt(e.target.attributes.getNamedItem('data-index').value);
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
        updateInputValue = (e) => {
            this.setState({inputValue: e.target.value})
        
        }

render(){
      return( 
      <>
       <div className ='conatiner ccontainHeight'>
      <div className='row'>
      <div className="col-2"></div>
      <div className='col col-4'>
      <h3>Add A New Feed To Your Explorer </h3>
      <form onSubmit={this.handleFeedAdd} className='form-inline' >
      <input type='text'className='form-control mr-sm-2'  onChange={this.updateInputValue}></input>
      <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Add Feed</button>
      </form>
      </div>
      <div className ='col-6'>
      <div id='containerList col-6'><Feedlist key= {'feed'}feed={this.state.currentUser} handleFeedRemove={this.handleFeedRemove}/></div>
       </div>
      </div>
      </div>
      </>
      )
  }
  }

  export default FeedEditor;