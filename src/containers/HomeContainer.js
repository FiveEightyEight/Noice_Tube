import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


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
                feedVideos: [
                    {
                        returned: false,
                        dataSet: [],
                    }
                ],
              }
            }

        handleClick = (e) => {
           const valueId = e.target.attributes.getNamedItem('data-id').value
           this.props.history.push(`/video/${valueId}`)
        }
           /*window.history.go(`https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`);
}*/

        componentDidMount() { 
            /*return Promise.all(*/
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
                    {(!this.state._isLoaded)? <h1>NO LOADING</h1>: 
                         this.state.feedVideos.slice(1).map((e,i)=>{
                        return e.returned === false ? <p key={i}>No videos found for feed</p> : <p key={i}>Explorer</p>
                        })
                    }
                    </div>
                </div>
            </div>
      </>
      
  }
  }

  export default withRouter(HomeContainer);

