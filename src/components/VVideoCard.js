import React from 'react';
import './VVideoCard.css';

const VVideoCard = props => {
    // for best results pass in the medium image url 
    // const arr = []
    console.log(props.videos)
    let storage = {}
    const handleLoop = (props)=>{
        const apiData = props.videos;
        console.log('here i am',apiData)
        apiData.map((e)=>{
            //  if(!e.dataSet.data){
            //      console.log(e)
            //      return (<p>is loading</p>)
            //  } else
             console.log('this is the object in the loop',e)
                    storage['apiData'] = e.dataSet.data.items
             // storage['title'] = e.dataSet.data.items.snippet.title
             // storage['channel'] = e.dataSet.data.items.snippet.channelTitle
             // storage['published'] = e.dataSet.data.items.snippet.publishedAt
             // storage['img'] = e.dataSet.data.items.snippet.thumbnails.high.url
     
         }) 
    }
     handleLoop(props)
     console.log(storage)
    return storage.apiData.map((e)=>{
        return (
            <div className="card border-0" >
               <img src={e.snippet.thumbnails.high.url} className="card-img-top" alt={e.snippet.title} onClick={props.handleVideoOnClick}/>
                <div className="card-body p-1">
                    <h5 className="card-title" onClick={props.handleVideoOnClick}>{e.snippet.title}</h5>
                    <p className='text-left row'>
                        <span className="card-text col-12 text-muted">{e.snippet.channelTitle}</span>
                        <span className="card-text col-12 text-muted">{e.snippet.publishedAt}</span>
                    </p>
                </div>
            </div >
        )
    })
   
 
}

export default VVideoCard;