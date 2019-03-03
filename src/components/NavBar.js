import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'

const NavBar = props => {

    return(
        <div className='container-fluid'>
     <nav >
        <div className='row navContainer'>
        <div className='col'>
        <Link  className='navLink' to='/'>Home</Link>
        </div>
        <div className='col'>
        <Link  className='navLink .text-wrap'to='/feededitor'>Feed Editor</Link>
        </div>
        <div className='col'>
        <Link className='navLink' to='/user'>Users</Link>
        </div>
        <div className='col'>
        <SearchBar / >
        </div>
        
        </div>
        
        
    </nav>
    </div>
    )
}

export default NavBar;