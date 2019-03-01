import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import VideoPlayer from '../components/Explorer'

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
        })
    }
    
    handleClick = (e) => {
      const location = this.props.location.pathname
      const valueId = e.target.attributes.getNamedItem('data-id').value
      console.log('part 1 ',location)
      console.log(valueId)
      // location.push(`/video/${valueId}`)
      console.log('part 2',location)
      // const valueId = e.target.attributes.getNamedItem('data-id').value
      // this.props.history.push(`/video/${valueId}`)
      /*window.history.go(`https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`);*/
       }
      
obj = {
  videoId: 'FStiNMo4-Jk',
  videoTitle: "Logic - H3 Podcast #105",
  channelTitle: 'H3 Podcast',
  description: "Thank you to Logic for joining us! Thanks to http://PolicyGenius.com & http://JoinHoney.com/H3 & http://StitchFix.com/H3 & https://GetQuip.com/H3 for sponsoring ...",
  publishedAt: "2019-02-22T01:05:31.000Z",
  thumbnails: {
    default:{
      height: 90,
      url: "https://i.ytimg.com/vi/FStiNMo4-Jk/default.jpg",
      width: 120,
    },
    high: { url: "https://i.ytimg.com/vi/FStiNMo4-Jk/hqdefault.jpg", width: 480, height: 360 },
    medium: { url: "https://i.ytimg.com/vi/FStiNMo4-Jk/mqdefault.jpg", width: 320, height: 180 }
  }
}    

render(){
  let data = this.state.currentUser.feed
  let dummy = this.obj
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
                    {/* {(!this.state._isLoaded)? <h1>NO LOADING</h1>: 
                         this.state.feedVideos.slice(1).map((e,i)=>{
                        return e.returned === false ? <p key={i}>No videos found for feed</p> : <p key={i}>Explorer</p>
                        })
                    } */}
                   <VideoPlayer videos = {data} dummy={dummy} click ={this.handleClick}/>
                    </div>
                </div>
            </div>
      </>
      
  }
  }

  export default withRouter(HomeContainer);

