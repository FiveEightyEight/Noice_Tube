import React from 'react';
import { withRouter } from 'react-router';
import {buildFeedVideos, populateFeedVideos, exploreLoadMore} from '../services/main';
import Explorer from '../components/Explorer';
// import VVideoCard from '../components/VVideoCard'






class HomeContainer extends React.Component {
        constructor(props) {
            super(props)
            
            this.state = {
                _isLoaded: false,
                currentUser: {
                  name: 'default',
                  feed: ['music', 'feed', 'podcast', 'chef' ], //local storage || ['music']
                },
                show:  1,
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
            const feedVideos = buildFeedVideos(this.state.currentUser.feed);
            this.setState({
                feedVideos: feedVideos,
            })
            populateFeedVideos(this.state.feedVideos, this.state.currentUser.feed, this.state.show)
                .then( newFeedVideos => {
             this.setState({
                 _isLoaded: true,
                 feedVideos: newFeedVideos,
                });
            // return exploreLoadMore(feedVideos.music)
            });

            /*return Promise.all(
                this.state.currentUser.feed.map((e,i)=>{
            axios({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                  part: 'snippet',
                  maxResults: this.state.show,
                  videoDefinition: 'high',
                  type: 'video',
                  videoEmbeddable: 'true',
                  // key: 'AIzaSyCb4Jbt3GZj63vr8JTRF8xV67Oae0hBQco',
                  q:  e,
                  pageToken: ''
                }
              }) 
              .then((response => {
                this.setState({
                    _isLoaded: true,
                    feedVideos: this.state.feedVideos.concat({returned: true, dataSet: response}),
                  })
            }))
             .catch((error)=>{
                this.setState({
               feedVideos: this.state.feedVideos.concat({data: false}),
            })
          });        
        })*/
    }
    
    componentDidUpdate(prevProps, prevState) {
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
            <div className='row'>
                <h4>Hi User</h4>
            </div>
            <hr/>
            <div className='row'>
                    <div className="col-3">
                        <h3>FeedBox</h3>
                    </div>
                    <div className="col-9">
                    <div className='container'>
                    { 
                         this.state.currentUser.feed.map((e,i)=>{
                            return  this.state.feedVideos[e] ? <Explorer key={i} results={this.state.feedVideos[e].items} query={this.state.feedVideos[e].query} handleClick={this.handleClick} clickLoad={this.handleLoadMore}/>: <p>No results found</p>
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

