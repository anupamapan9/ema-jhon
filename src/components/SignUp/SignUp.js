import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form >
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="password" id="" />
                        </div>
                        <input type="submit" value="Submit" className='form-submit' />
                    </form>
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