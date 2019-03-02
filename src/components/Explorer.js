import React from 'react';
import './Explorer.css'
import VVideoCard from './VVideoCard'
require('bootstrap')


const Explorer = ( props ) => {
            console.log('explorer props',props)
    return (<div className = 'container'>
                <div className = 'row'>
                {props.results.map((e, i) => {
                    console.log('lets see what e is',e)
                        return (<>
                                <VVideoCard e = {e} key ={i}  click = {props.handleClick}/>
                            </>)
                        })
                }
                </div>
                    <button className='btn btn-primary'>SHOW MORE</button>
            </div>
    )
}

//   http://localhost:3000/?#/video/:video_id


export default Explorer
