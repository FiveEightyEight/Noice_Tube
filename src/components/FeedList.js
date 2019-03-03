import React from 'react'
const FeedList = (props) =>{
    return (
        <div className='container col-7 left'>
        <h1>Explore Feed List </h1>
        <ul className="list-group">
    {
    props.feed.feed.map((e,i)=>{
        return (
        <div key={i} id='list'>
        <div className='feedListItem user row col-3'>
        <p style={{'display':'inline','marginRight':'75%'}} id={i} >{e}</p>
        <span  data-index={i} onClick={props.handleFeedRemove} className="badge badge-dark" id='removelink'>Remove Feed</span>
        </div>
        </div>
        )
    })
    }
    </ul>
    </div>
    )

}
export default FeedList;