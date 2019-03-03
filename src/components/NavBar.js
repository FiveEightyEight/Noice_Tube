import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'
import logo from '../assets/testLogoN.png';

const NavBar = props => {

    return (
        <nav>
            <div className='row navContainer'>
                <div className="col-1"></div>
                <div className="col-2 mx-auto">
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div className="col-6 my-auto">
                    <div className="row">
                            <SearchBar />
                        </div>
                    </div>
                <div className="col-3 my-auto text-right">
                    <div className="row my-auto">
                            <Link className='navLink ml-5' to='/'>Home</Link>
                    </div>
                    <div className="row my-auto">
                            <Link className='navLink ml-5' to='/feededitor'>Feed Editor</Link>
                    </div>
                    <div className="row my-auto">
                            <Link className='navLink  ml-5' to='/user'>Users</Link>
                    </div>
                </div>
            </div> 
        </nav>
    )
}

export default NavBar;