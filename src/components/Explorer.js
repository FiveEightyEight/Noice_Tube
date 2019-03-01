import React from 'react';
import './Explorer.css'
require('bootstrap')

const VideoPlayer = ( props ) => {
    return <div className ='container'>
        
            {
                props.videos.map(e=>{
                    return (
                        <div className ='container  col-12'>
                            <div className = 'row'>
                                <div className="card" Style = 'width: 13rem'>
                                <img className="card-img-top" src={props.dummy.thumbnails.high.url} alt="Card image cap" onClick={props.click}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.dummy.channelTitle}</h5>
                                        <p className="card-text">{props.dummy.description}</p>
                                        <p>{props.dummy.publishedAt}</p>
                                    </div>
                                </div>
                            </div>
                            <button>SHOW MORE</button>
                        </div>

)


})
}

</div>
   
   
  }

//   http://localhost:3000/?#/video/:video_id


const Explorer = (props) =>{
    console.log(props.dummy)
            
           
        
}

export default VideoPlayer