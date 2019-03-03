import React from 'react';
import './VVideoCard.css';

const dealWithQuots = (title) => {
    console.log(title)
    if(title.includes('&quot;')){
        let find = '&quot;';
        let re = new RegExp(find, 'g');
        let Title = title.replace(re,'"')
        return Title
    }
    if(title.includes('&amp;')){
        let find = '&amp;';
        let re = new RegExp(find, 'g');
        let Title = title.replace(re,'&')
        return Title
    }
    else{return title}
}
const VVideoCard = props => {
    // const { img, title, channel, published } = props; 
    return ( <>
    <div className = 'col-3'>
            <div className="card" id="listStatic">
                <img src={props.e.thumbnail} className="card-img-top" alt={props.e.videoTitle} onClick={props.click} data-id ={props.e.videoId}/>
                    <div className="card-body p-1">
                        <h5 className="card-title title" onClick={props.click} data-id ={props.e.videoId}>{dealWithQuots(props.e.videoTitle)}</h5>
                        <p className='text-left row'>
                            <span className="card-text col-12 text-muted">{props.e.channelName}</span>
                            <span className="card-text col-12 text-muted">{props.e.publishedAt}</span>
                        </p>
                    </div>
                </div>
            </div> 
        </>
            )
}

export default VVideoCard;