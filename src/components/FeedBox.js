import React from 'react'

const FeedBox = props=> {
    return (
        <>
        {
            props.feed.map((e,i)=>{
                return <p id="list" key={i}>{e}</p>
            })
        }
        </>
    )

}

export default FeedBox