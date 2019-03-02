import React, {Component} from 'react';
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
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/commentThreads',
            params: {
              part: 'snippet,replies',
              videoId: 'jbnddQ9l0IA',
              key: 'AIzaSyB-7-OJ42-7dRfTDbCgN5Kr7jNZXJwWKYE',
              textFormat:'plainText'
            }
          })
          .then(response=>{
              /*
                response.items = [{.snipet.authorDisplayName, .snipet.authorProfileImageurl, .snippet.texturl}]
              */
             console.log(response)
            let comments = [];
             response.data.items.forEach(element => {
                let newObj =  {
                   username: element.snippet.topLevelComment.snippet.authorDisplayName,
                   profilePic: element.snippet.topLevelComment.snippet.authorProfileImageurl,
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
                        <div className='row'>
                        <p>{e.comment}</p>
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