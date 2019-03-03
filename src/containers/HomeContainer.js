import React from 'react';
import {Spinner} from 'reactstrap';
import { withRouter } from 'react-router';
import {buildFeedVideos, populateFeedVideos, exploreLoadMore} from '../services/main';
import Explorer from '../components/Explorer';
import FeedBox from '../components/FeedBox';
import Greeting from '../components/Greeting';
import '../components/Greeting.css';
// import VVideoCard from '../components/VVideoCard'






class HomeContainer extends React.Component {
        constructor(props) {
            super(props)
            
            this.state = {
                _isLoaded: false,
                currentUser: {
                  name: 'default',
                  feed: ['music'], //local storage || ['music']
                },
                show:  4,
                feedVideos: {},
              }
            }

        handleClick = (e) => {
           const valueId = e.target.attributes.getNamedItem('data-id').value
           this.props.history.push(`/video/${valueId}`)
        }
           /*window.history.go(`https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`);
}*/

        componentDidMount() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser')) || this.state.currentUser;
            if(currentUser.feed.length === 0){
                currentUser.feed = this.state.currentUser.feed
            }
            const feedVideos = buildFeedVideos(currentUser.feed);
            this.setState({
                currentUser: currentUser,
                feedVideos: feedVideos,
            })
            populateFeedVideos(this.state.feedVideos, currentUser.feed, this.state.show)
                .then( newFeedVideos => {
             this.setState({
                 _isLoaded: true,
                 feedVideos: newFeedVideos,
                });
            });
    }
    

    handleLoadMore = (e) => {
        const queryName = e.target.attributes.getNamedItem('data-id').value
        console.log("Q",queryName)
        exploreLoadMore(this.state.feedVideos[queryName])
        .then((newFeedVideos)=>{
            const currentFeedObject = Object.assign(this.state.feedVideos, newFeedVideos)
            console.log("Current",currentFeedObject);
            this.setState({
                _isLoaded: true,
                 feedVideos: currentFeedObject,
            })
        })
        }
            
render(){
      return <>
        <div className='container-fluid'>
            <div className='row mx-auto jumbotron' style={{backgroundColor:'#6B717E'}}>
                <Greeting name = {this.state.currentUser.name}/>
            </div>
            <hr/>
            <div className='row'>
                    <div className="col-3" >
                        <h3>FeedBox</h3>
                        <FeedBox feed={this.state.currentUser.feed} />
                    </div>
                    <div className="col-9">
                    <div className='container'>
                    { 
                         this.state.currentUser.feed.map((e,i)=>{
                            return  this.state.feedVideos[e] ? <Explorer key={i} results={this.state.feedVideos[e].items} query={this.state.feedVideos[e].query} handleClick={this.handleClick} clickLoad={this.handleLoadMore}/>:<div key={i} className='row'> <Spinner style={{ width: '3rem', height: '3rem' }} /> </div>

                        })
                    } 
                    </div>
                    </div>
                </div>
            </div>
      </>
      
  }
  }

  export default withRouter(HomeContainer);

 /* e ? <Explorer key={i} results={e[this.state.currentUser.feed[i]]}/> : <p>No results found</p>*/

