import React from 'react';
import './Explorer.css'
require('bootstrap')

const Explorer = ( props ) => {
            VideoPlayer(props)
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

const arr = []

const VideoPlayer = (props) =>{
    const apiData = props.videos;

    apiData.map((e)=>{

        if(!e.dataSet.data){
            return (<p>is loading</p>)
        } else
        
        console.log('part 22222222',e.dataSet.data)
        arr.push(e.dataSet.data.items)
    })            
           
        data(arr)
}

const data = (arr) =>{
    arr.map((e)=>{
        console.log(e)
    })
}

export default Explorer