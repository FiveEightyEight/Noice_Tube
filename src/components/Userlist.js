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
                <div className = 'container col-7 left'>  
                    <ul className="list-group">
                        {userList.map((currUser,i) => {
                            return (
                                <div  className="user row" style= { props.state.currentUser === currUser ? {backgroundColor:'#102542'} : {null:null} } key = {i} id='list' >
                                  <p className ='col-3'style={{'display':'inline','marginRight':'75%','color':'black'}}   id={i} onClick={props.handleUserClick} >{currUser.name}</p>
                                  <button data-index={i} onClick={props.removeUser} className="badge badge-dark col-3 removeButton" id='removelink'>Remove User</button>
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