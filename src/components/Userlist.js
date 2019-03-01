import React from 'react';

const Userlist = props => { 
    if (props.state.userList === 'undefined'){
        return;
    }
    else {
        console.log(props, 'is props in USERLIST')
        console.log(props.state.userList, 'is list')
        const userList = props.state.userList    
    return(
            <>
                <div>  
                    <ul className="list-group">
                        {userList.map((currUser,i) => {
                            return (
                            <div key = {i} >
                                <p  style={{'display':'inline','marginRight':'75%'}}   id={i} onClick={props.handleUserClick} >{currUser.name}</p>
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