/*
4. User 
 Richard
class user extends Component{
  
    state = {
      userList: [],
      currentUser: {
        name: "", 
        feed: ['', '']
      }, 
      
    }
    
    Prevent duplicates
    1. check userList
    2. if user exist show popup
    3. if user does not exist add to userList
    
    EventHandler:
    1. Add a user -> onClick push the new user to the userList
    2. Onclick -> change color of the  userList clicked on
    
    Commponents:
    1. UserList
    2. Create a new User // possible for future
    
    local storage 
    1. name and feed stringify to locl storage 
    
    */

import React from 'react'

class User extends React.Component {
    constructor(props){
        super(props) 

        this.state = {
        inputValue: '',
        userList: ['Rich'],
        currentUser: {
        name: "",
        feed: []
            },
        }
    }

checkUser = () => {
    const userName = this.state.inputValue; // storing the string in a variable
    
    const list = [...this.state.userList] // made a copy of the userList from the state
        let newObj = {...this.state}; // made a copy of the object
        newObj.userList.push(userName); // going inside the copied obj into the userlist and pushing the userName inside
        newObj.currentUser.name = userName; 
        newObj.currentUser.feed = []; 

        this.setState(newObj);
        console.log('new obj', newObj)
        console.log('fucking new list', list);

        console.log('state list', this.state.userList);
        console.log('YO STATE:', this.state);


}

// handleKeyDown = (e) => {
    
//     if(e.keyCode === 13){
//         const userName = this.state.inputValue;
//         console.log('username in key downnn', userName)
//         this.checkUser(userName)
//     }

//     console.log('this triggered')
// }

updateInputValue = (e) => {
    this.setState({inputValue: e.target.value})

}

displayUserList = () => {
    const userList = this.state.userList
    // console.log('userlist', userList)
    userList.map((currUser) => {
        console.log('currUser', currUser)
        return(
        <ul class="list-group">
        <li class="list-group-item">{currUser}</li>
      </ul> 
      )
    })
}


    render(){
        return (<>
        <div className ='conatiner'>
            <div className ='row'>
                <div className ='col-6'>
                <h3>Create a new User</h3>
                <form className="form-inline" onSubmit={this.checkUser}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Create User" aria-label="Search" value = {this.state.inputValue} onChange = {this.updateInputValue} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
                <div className ='col-6'>
                <h3>User List</h3>
                    {/* {this.displayUserList()} */}
                </div>
            </div>
        </div>
      </>)
    }


}

export default User