import './Login.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form >
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input type="submit" value="Submit" className='form-submit' />
                </form>
                <p>New To Ema-Jhon ? <Link className='form-link' to='/signup'>Create new User </Link></p>
            </div>
        </div>
    );
};

export default Login;