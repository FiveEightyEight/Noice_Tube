import React from 'react';
import { withRouter } from 'react-router';
import {buildFeedVideos, populateFeedVideos} from '../services/main';
import Explorer from '../components/Explorer';


class HomeContainer extends React.Component {
        constructor(props) {
            super(props)
            
            this.state = {
                _isLoaded: false,
                currentUser: {
                  name: 'default',
                  feed: ['music', 'feed', 'podcast'],
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
                  key: 'AIzaSyBcCsdu9K95VsD2umeUKsC-Dj2F-GFgs08',
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
        console.log("PrevState",prevState);
        console.log("currentState", this.state);

    }
            
render(){
    console.log("Toka",this.state)
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
                    { 
                         this.state.currentUser.feed.map((e,i)=>{
                             console.log("e", e)
                            return  this.state.feedVideos[e] ? <Explorer key={e} results={this.state.feedVideos[e].items}/>: <p>No results found</p>
            
                        })
                    }
                    </div>
                </div>
            </div>
      </>
      
  }
  }

  export default withRouter(HomeContainer);

 /* e ? <Explorer key={i} results={e[this.state.currentUser.feed[i]]}/> : <p>No results found</p>*/

