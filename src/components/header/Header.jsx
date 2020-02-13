import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_header.scss';
import {Link} from 'react-router-dom';

const Header = () => {


    return (
        <div className="header-div">
            <nav className="nav-bar">
            <ul className="main-title">
                <Link className="list-item" to="/"><li >Aspen Grove Berries</li></Link>
            </ul>

            <ul className="nav-list">
                <Link className="list-item" to="/"><li >Home</li></Link>
                <Link className="list-item" to="/shop"><li>Shop</li></Link>
                <Link className="list-item" to="/about"><li>About</li></Link>
                <Link className="list-item" to="/contact"><li>Contact</li></Link>
            </ul>
            </nav>
        </div>
    )
};

export default Header;