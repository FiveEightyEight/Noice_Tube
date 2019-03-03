import React from 'react';
import './Explorer.css'
import VVideoCard from './VVideoCard'

const Explorer = ( props ) => {
    return (<div className = 'container'>
                <div className = 'row Explore'>
                <h1 className='text-capitalize col-12'>{props.query}</h1>
                {props.results.map((e, i) => {
                        return (<React.Fragment key ={i}>
                                <VVideoCard e = {e} key={i} click = {props.handleClick}/>
                            </React.Fragment>)
                        })
                }
                </div>
                    <button className='btn p-5px rounded' style={{backgroundColor:'#102542',color:'#000000'}} onClick={props.clickLoad} data-id={props.query}>Load More</button>
            </div>
    )
}

export default Explorer;
