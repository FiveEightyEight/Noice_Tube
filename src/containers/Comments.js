import React from 'react';
import './Comments.css'
const Comments = props => {

    return(
        <>
        <div className='container'>
        {
           
               props.comments.map((e,i)=>{
                   return(
                       <div key={i}>
                    <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col-4'>
                    <p className='username'>{e.username}</p>
                    <img className='rounded-circle' src={e.profilePic} />
                    <p style={{'display':'inline', 'marginLeft':'15px'}}>{e.comment}</p>
                    <hr></hr>
                    </div>
                    <div className='col col-6'>
                    </div>
                   </div> 
                   </div>  
                   ) 
               })
           
        }            
        </div>
        </>
    )
}


export default Comments;