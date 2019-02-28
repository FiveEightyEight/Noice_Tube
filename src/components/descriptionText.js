import React from 'react';
import './descriptionText.css';

const DescriptionText = props => {
    return (
        <>
            <div className='col-12'>
                {(props.expand) ? '': <div className="overflow-hidden" style={{'height':'100px'}}>
                    <div className="">
                        {props.description}
                    </div>
                </div>}
                <div className="collapse overflow-auto" id="collapseExample">
                    <div className="">
                        {props.description}
                    </div>
                </div>

                <a className="btn bg-white text-muted p-0" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={props.handleDescription}>
                    Load More...
                </a>
            </div>
        </>
    )
}

export default DescriptionText;
