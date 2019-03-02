import React from 'react';

const Greeting = props => { 
    return (
        <>
         {props.name === 'default'? 'Hi': <h1  className='text-capitalize' style={{color:'#000000'}}>{props.name}'s Feed</h1>}
        </>
    )
}
export default Greeting;