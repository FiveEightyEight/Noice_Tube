import React from 'react';

const Greeting = props => { 
    return (
        <>
         {props.name === 'default'? 'Hi': <h1 style={{color:'#000000'}}>{props.name}'s Feed</h1>}
        </>
    )
}
export default Greeting;