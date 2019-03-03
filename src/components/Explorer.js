import React from 'react';
import './Explorer.css'
import VVideoCard from './VVideoCard'

const Explorer = ( props ) => {
    return (<div className = 'container'>
                <div className = 'row'>
                {props.results.map((e, i) => {
                        return (<React.Fragment key ={i}>
                                <VVideoCard e = {e} key={i} click = {props.handleClick}/>
                            </React.Fragment>)
                        })
                }
                </div>
                    <button className='btn btn-primary' onClick={props.clickLoad} data-id={props.query}>SHOW MORE</button>
            </div>
    )
}

export default Explorer;
