import React from 'react'

const FeedBox = props=> {
    return (
        <>
        {
            props.feed.map((e,i)=>{
                return <p>{e}</p>
            })
        }
        </>
    )

}

export default FeedBox