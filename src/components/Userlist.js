import React from 'react';
import './Userlist.css'
const Userlist = props => { 
  
    if (props.state.userList === 'undefined'){
        return;
    }
    else {
        
        const userList = props.state.userList    
    return(
            <>
                <div>  
                    <ul className="list-group">
                        {userList.map((currUser,i) => {
                            return (
                            <div  className="user" style= { props.state.currentUser === currUser ? {backgroundColor:'#334FFF'} : {null:null} } key = {i} >
                                <p  style={{'display':'inline','marginRight':'75%','color':'black'}}   id={i} onClick={props.handleUserClick} >{currUser.name}</p>
                                <span  id={i} onClick={props.removeUser} className="badge badge-dark">Remove User</span>
                                </div>
                            )
                                })}
                    </ul>
                </div>
            </>
            )
        }
   
    }
    
  

export default Userlist;