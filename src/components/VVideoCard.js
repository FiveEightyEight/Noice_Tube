import React from 'react';
import './VVideoCard.css';

const VVideoCard = props => {
    // const { img, title, channel, published } = props; 
    return ( <>
    <div className = 'col-3'>
            <div className="card" id="listStatic">
                <img src={props.e.thumbnail} className="card-img-top" alt={props.e.videoTitle} onClick={props.click} data-id ={props.e.videoId}/>
                    <div className="card-body p-1">
                        <h5 className="card-title title" onClick={props.click} data-id ={props.e.videoId}>{props.e.videoTitle}</h5>
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