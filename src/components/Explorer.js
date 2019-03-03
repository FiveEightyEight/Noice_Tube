import React from 'react';
import './Explorer.css'
import VVideoCard from './VVideoCard'

const Explorer = ( props ) => {
    return (<>
    <div className = 'container'>
                <div className = 'row Explore'>
                <h1 className='text-capitalize col-12'>{props.query}</h1>
                {props.results.map((e, i) => {
                        return (<React.Fragment key ={i}>
                                <VVideoCard e = {e} key={i} click = {props.handleClick}/>
                            </React.Fragment>)
                        })
                }
                </div>
                    <button className='btn mb-5 mt-2' id="svg">
                        <svg onClick={props.clickLoad} data-id={props.query}>
                        <rect x="5" y="5" rx="25" fill="none" width="190" height="50"></rect>
                    </svg>
                    <span className="spanT">More</span>
                    </button>
            </div>
            <hr/>
            </>
    )
}

export default Explorer;
