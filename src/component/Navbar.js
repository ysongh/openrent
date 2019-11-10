import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
            <Link to="/">
                <img src={Logo} className="image" alt="Logo"/>
            </Link>
            <ul id="nav-mobile" className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;