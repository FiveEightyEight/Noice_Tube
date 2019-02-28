import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'

const NavBar = props => {

    return(
    <nav>
        <div className='row navContainer'>
        <div className='col'>
        <Link to='/'>Home</Link>
        </div>
        <div className='col'>
        <Link to='/feededitor'>Feed Editor</Link>
        </div>
        <div className='col'>
        <Link to='/user'>Users</Link>
        </div>
        <div className='col'>
        <SearchBar  / >
        </div>
        
        </div>
        
        
    </nav>
    )
}

export default NavBar;