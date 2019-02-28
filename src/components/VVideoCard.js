import React from 'react';
import './VVideoCard.css';

const VVideoCard = props => {
    // for best results pass in the medium image url 
    const { img, title, channel, published } = props; 
    return (
        <div className="card border-0" >
           <img src={img} className="card-img-top" alt={title}/>
            <div className="card-body p-1">
                <h5 className="card-title" onClick={props.handleVideoOnClick}>{title}</h5>
                <p className='text-left row'>
                    <span className="card-text col-12 text-muted">{channel}</span>
                    <span className="card-text col-12 text-muted">{published}</span>
                </p>
            </div>
        </div >
    )
}

export default VVideoCard;