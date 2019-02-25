import React from 'react';
import './FeedList.css';


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
                newState.currentUser.feed = newState.currentUser.feed.concat(e.target.value)
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
      <input type='text'className='input-group mb-3' onKeyDown={this.handleFeedAdd}></input>

      </div>
        <div className='col col-6'>
        {
            this.state.currentUser.feed.map((e,i)=>{
                return (
                <>
                <div  key={i+1} className='feedListItem'>
                <p  style={{'display':'inline','marginRight':'75%'}} key={i}  id={i} >{e}</p>
                <span key={i+2} id={i} onClick={this.handleFeedRemove} className="badge badge-dark">X</span>
                
                </div>
                </>
                )
            })
        }

        </div>
      </div>

      </>
      )
  }
  }

  export default FeedEditor;