import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelPasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const handelConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handelerrorBlur = (e) => {
        setError(e.target.value)
    }
    const handelCreateNewUser = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Password did not match')
        }
    }
    console.log(email)
    return (
        <div className='login'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={handelCreateNewUser}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" required onBlur={handelEmailBlur} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" required onBlur={handelPasswordBlur} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" name="password" id="" required onBlur={handelConfirmPasswordBlur} />
                        </div>
                        <input type="submit" value="Submit" className='form-submit' />
                    </form>
                    <p style={{ color: 'red' }}>{error}</p>
                    <p className='signup-link'>Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
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

export default SignUp;