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

checkUser = () =>{
    
    const inputValue = this.state.inputValue
    console.log('step 1', inputValue)
    const userList = this.state.userList
    userList.map((value, i)=>{
        console.log('step 2a', inputValue)
        if(value === inputValue){
            return alert('User already exist');
        } else 
        console.log('step 2b', this.state)
        this.setState({currentUser: {
            name: `${inputValue}`, 
            feed: []
        }})
    })
}

handleKeyDown = (e) => {
    if(e.keyCode === 13){
        const userName = this.state.inputValue;
        this.checkUser(userName)
    }
}

updateInputValue = (e) => {
    this.setState({inputValue: e.target.value})

}

displayUserList = () =>{
    
}


    render(){
        return <>
        <div className ='conatiner'>
        <div className ='row'>
        <div className ='col-6'>
        <h3>Create a new User</h3>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Create User" aria-label="Search" value = {this.state.inputValue} onChange = {this.updateInputValue} onKeyDown={this.handleKeyDown}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={this.checkUser}>Search</button>
        </form>
        </div>
        <div className ='col-6'>
        <h3>User List</h3>
        
        </div>
        </div>
        </div>
      </>
    }


}

export default User