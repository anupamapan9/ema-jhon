import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/inventories">Inventories</a>
                <a href="/about">About</a>
            </div>
        </nav>

    );
};

export default Header;