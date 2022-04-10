import './Login.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelPasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const [singInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const handelUserSignIn = (event) => {
        event.preventDefault()
        singInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/inventory')
    }
    return (
        <div className='login'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handelUserSignIn}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" required onBlur={handelEmailBlur} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" onBlur={handelPasswordBlur} />
                        </div>
                        <input type="submit" value="Submit" className='form-submit' required />
                    </form>
                    <p className='signup-link'>New To Ema-Jhon ? <Link className='form-link' to='/signup'>Create new User </Link></p>
                    <div className='divider'>
                        <div className='left'></div>
                        <p>or</p>
                        <div className='left'></div>
                    </div>
                    <p>
                        {error?.message}
                    </p>
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