import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'

import './NavBar.css'

const NavBar = props => {

    return(
    <nav>
        <div className='row navContainer justify-content-md-center'>
        <div className='col col-4'>
        <Link to='/'>Home</Link>
        </div>
        <div className='col col-4'>
        <Link to='/feededitor'>Feed Editor</Link>

        </div>
        <div className='col col-4'>
        <Link to='/users'>users</Link>

        </div>
        </div>
        
        
    </nav>
    )
}

export default NavBar;