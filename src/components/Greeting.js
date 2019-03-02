import React from 'react';

const Greeting = props => { 
    return (
        <>
         {props.name === 'default'? 'Hi': <p style={{color:'#000000'}}>{props.name}'s Feed</p>}
        </>
    )
}
export default Greeting;