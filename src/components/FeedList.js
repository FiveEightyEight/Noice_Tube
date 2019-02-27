import React from 'react'
const FeedList = (props) =>{
    return (
        <div className='col col-6'>
        <h1>Explore Feed List </h1>
    {
    props.feed.feed.map((e,i)=>{
        return (
        <div key={i}>
        <div   className='feedListItem'>
        <p  style={{'display':'inline','marginRight':'75%'}}   id={i} >{e}</p>
        <span  id={i} onClick={props.handleFeedRemove} className="badge badge-dark">X</span>
        
        </div>
        </div>
        )
    })
    }
    </div>
    )

}
export default FeedList;