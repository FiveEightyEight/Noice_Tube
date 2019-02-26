import React from 'react'
const FeedLi = (props) =>{


    return (
        <div className='col col-6'>
        <h1>Explore Feed List </h1>
    {
    props.feed.feed.map((e,i)=>{
        return (
        <>
        <div  key={i+1} className='feedListItem'>
        <p  style={{'display':'inline','marginRight':'75%'}} key={i}  id={i} >{e}</p>
        <span key={i+2} id={i} onClick={props.handleFeedRemove} className="badge badge-dark">X</span>
        
        </div>
        </>
        )
    })
    }
    </div>
    )

}
export default FeedLi;