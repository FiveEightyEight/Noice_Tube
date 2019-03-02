import React, {Component} from 'react';
import './Comments.css'
import axios from 'axios'

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
                comments: [
                  {comment:'lol'},
                ]
              
        }
    }
                // key:'AIzaSyB-7-OJ42-7dRfTDbCgN5Kr7jNZXJwWKYE'
    componentDidMount = () => {
        const id = this.props.videoID
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/commentThreads',
            params: {
              part: 'snippet,replies',
              videoId: id,
              key: 'AIzaSyB-7-OJ42-7dRfTDbCgN5Kr7jNZXJwWKYE',
              textFormat:'plainText'
            }
          })
          .then(response=>{
              console.log(response)
            let comments = [];
             response.data.items.forEach(element => {
                let newObj =  {
                   username: element.snippet.topLevelComment.snippet.authorDisplayName,
                   profilePic: element.snippet.topLevelComment.snippet.authorProfileImageUrl,
                   comment: element.snippet.topLevelComment.snippet.textDisplay
                }
                comments.push(newObj)
                this.setState({comments:comments},()=>{
                    console.log(this.state)
                })
             });
          },err=>{    console.log(this.props.videoId)
          })
          .catch(err=>{
              console.log(err)
          })
    }
    render(){
        return(
            <>
            <div className='container'>
            {
               
                   this.state.comments.map((e,i)=>{
                       return(
                           <div key={i}>
                        <div className='row'>
                        <div className='col'>
                        </div>
                        <div className='col-4'>
                        <p className='username'>{e.username}</p>
                        <img className='rounded-circle' src={e.profilePic} />
                        <p>{e.comment}</p>
                        </div>
                        <div className='col col-6'>
                        </div>
                       </div> 
                       </div>  
                       ) 
                   })
               
            }            
            </div>
            </>
        )
    }
}

export default Comments;