import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
    const handelSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='nav-container'>
            <img src={logo} alt="logo" />
            <div>
                <Link to={'/'}>Home</Link >
                <Link to={'/products'}>Products</Link >
                <Link to={'/orders'}>Orders</Link >
                <Link to={'/inventory'}>Inventories</Link >
                <Link to={'/about'}>About</Link >
                {user ? <button onClick={handelSignOut}>SignOut</button> : <Link to={'/login'}>Log in</Link >}



            </div>
        </nav>

    );
};

export default Header;