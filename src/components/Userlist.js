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
                                return <>
                                    <li className="list-group-item" key={i}>
                                        {currUser.name}
                                    </li>
                                    
                                </>
                                })}
                        </ul>
                    </div>
            </>)
        }
   
    }

export default Userlist;