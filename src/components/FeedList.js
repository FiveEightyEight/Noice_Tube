import React, {Fragment} from 'react'
import '../containers/FeedList.css'

const FeedList = (props) =>{
    return <>
        <div className='container col-7 left ccontainHeight'>
        <h1>Explore Feed List </h1>
        <ul className="list-group">
    {
    props.feed.feed.map((e,i)=>{
        return <Fragment key={i}>
        <div key={i} id='list' className="user row justify-content-between p-3 divStyle">
        <span className='feedListItem col-7'>
            <div className="col-10">
             <p style={{'display':'inline'}} id={i} >{e}</p>
            </div>
            <div className="col-2">
                <button  data-index={i} onClick={props.handleFeedRemove} className="badge badge-dark marg" id='removelink'>Remove Feed</button>
            </div>
        </span>
        </div>
        </Fragment>
    })
    }
    </ul>
    </div>
    </>

}
export default FeedList;