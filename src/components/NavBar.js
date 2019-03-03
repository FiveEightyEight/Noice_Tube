import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'
import logo from '../assets/testLogoN.png';

const NavBar = props => {

    return (
        <nav>
            <div className='row navContainer'>
                <div className="col-3 float-left">
                        <img src={logo} alt='logo' />
                </div>
                <div className="col-6 my-auto">
                    <div className="row">
                            <SearchBar />
                        </div>
                    </div>
                <div className="col-3 my-auto">
                    <div className="row">
                            <Link className='navLink text-right' to='/'>Home</Link>
                    </div>
                    <div className="row text-right">
                            <Link className='navLink text-right' to='/feededitor'>Feed Editor</Link>
                    </div>
                    <div className="row text-right">
                            <Link className='navLink text-right' to='/user'>Users</Link>
                    </div>
                </div>
            </div> 
        </nav>
    )
}

export default NavBar;