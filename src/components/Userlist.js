import React from 'react';
import './Userlist.css'
const Userlist = props => {

    if (props.state.userList === 'undefined') {
        return;
    }
    else {

        const userList = props.state.userList
        return (
            <>
                <div className='container col-7 left'>
                    <ul className="list-group">
                        {userList.map((currUser, i) => {
                            return (
                                <div className="user row justify-content-between p-3" style={props.state.currentUser.name === currUser.name ? { backgroundColor: '#102542', 'border': '1px solid #f6f930' } : { backgroundColor: '#ffffff', 'border': '1px solid #102542' }} key={i} id='list' >
                                    <span className='col-7' style={props.state.currentUser.name === currUser.name ? {'color': '#f6f930' }: {'color': '#000000'}} id={i} onClick={props.handleUserClick} >{currUser.name}</span>
                                    <button className="badge badge-dark col-3 removeButton user" data-index={i} onClick={props.removeUser} id='removelink' style={props.state.currentUser.name === currUser.name ? { 'border': '1px solid #f6f930' } : { 'border': '1px solid #102542' }}>Remove User</button>
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