import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'
import logo from '../assets/testLogoN.png';

const FooterBar = props => {

    return (
        <nav>
            <div className='row navContainer'>
                <div className="col-1"></div>
                <div className="col-2 mx-auto">
                    <Link to='/'>
                        <img src={logo} alt='logo' style={{width: '75px', height:'75px', marginTop: '40px'}} />
                    </Link>
                </div>
                <div className="col-6 my-auto"></div>
                <div className="col-3 my-auto text-right">
                    <div className="row my-auto">
                            <Link className='navLink ml-5' to='/'>Home</Link>
                            <Link className='navLink ml-5' to='/feededitor'>Feed Editor</Link>
                            <Link className='navLink  ml-5' to='/user'>Users</Link>
                    </div>
                    <div className="row my-auto">
                    </div>
                    <div className="row my-auto">
                    </div>
                </div>
                </div>
        </nav>
    )
}

export default FooterBar;