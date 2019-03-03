import React from 'react';

const Greeting = props => { 
    return (
        <>
         {props.name === 'default'? 'Hi': <h1 className='text-capitalize name'>{props.name}'s Feed</h1>}
        </>
    )
}
export default Greeting;