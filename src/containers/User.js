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
import UserList from '../components/Userlist'

class User extends React.Component {
    constructor(props){
        super(props) 

        this.state = {
        inputValue: '',
        userList: [],
        currentUser: {
        name: "",
        feed: []
            },
        }
    }

    checkUser = (userName) => {
        for(let i = 0; i < this.state.userList.length; i++){
            console.log('loop',this.state.userList[i])
            if(this.state.userList[i].name === userName){  
                return true
        }
    }
}

    handleSubmit = () => {
        if (this.checkUser(this.state.inputValue) === true){
            this.setState({inputValue: ''})
            return alert('User already exist');
        }
        const newUser = {
            name: this.state.inputValue,
            feed:['music']
        }
        
        const list = [...this.state.userList]; 
        // console.log(newUser, 'is our new User')
        // console.log(list, 'is list');
        list.push(newUser);

        this.setState({
            userList:list,
            currentUser: newUser,
        },()=>{
            // console.log(this.state, 'is new State')
            this.setState({inputValue: ''})
        });
        
}

    removeUser = (e) =>{
        let userList = this.state.userList
        let removeUser = parseInt(e.target.id);
        
        let remove = userList.slice(0, removeUser).concat(userList.slice(removeUser+1))
         this.setState({userList: remove},()=>{
           localStorage.setItem(`currentUser`, JSON.stringify(this.state.currentUser))
         })
    }

updateInputValue = (e) => {
    this.setState({inputValue: e.target.value})

}

render(){
    return (<>
                <div className ='conatiner'>
                    <div className ='row'>
                        <div className ='col-6'>
                            <h3>Create a new User</h3>
                            <form className="form-inline" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Create User" aria-label="Search" value = {this.state.inputValue} onChange = {this.updateInputValue} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                            <div className ='col-6'>
                        <h3>User List</h3>
                            <div><UserList state ={this.state} removeUser ={this.removeUser}/> </div>
                        </div>
                    </div>
                </div>
        </>)
    }

}

export default User