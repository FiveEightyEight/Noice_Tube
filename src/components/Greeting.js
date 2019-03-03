import React from 'react';

const Greeting = props => { 

    console.log(props.name)
    return (
        <>
         {props.name === 'default'? 'Hi': <h1 className='text-capitalize name'>Welcome Back {props.name}!</h1>}
        </>
    )
}
export default Greeting;