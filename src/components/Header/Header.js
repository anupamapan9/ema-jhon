import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="logo" />
            <div>
                <Link to={'/home'}>Home</Link >
                <Link to={'/orders'}>Orders</Link >
                <Link to={'/inventory'}>Inventories</Link >
                <Link to={'/about'}>About</Link >
            </div>
        </nav>

    );
};

export default Header;