import './Login.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form >
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" />
                        </div>
                        <input type="submit" value="Submit" className='form-submit' required />
                    </form>
                    <p className='signup-link'>New To Ema-Jhon ? <Link className='form-link' to='/signup'>Create new User </Link></p>
                    <div className='divider'>
                        <div className='left'></div>
                        <p>or</p>
                        <div className='left'></div>
                    </div>
                    <div className='google-login' typeof='button'>
                        <div><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /></div>
                        <div>Continue with Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;