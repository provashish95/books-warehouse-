import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '2px' }} className='footer-style w-50 rounded'></div>
                <p className='mt-2 px-2 text-color'>or</p>
                <div style={{ height: '2px' }} className='footer-style w-50 rounded'></div>
            </div>
            <div>
                <button className='btn btn-style mx-auto d-block w-50 my-2'>
                    <span className='me-3'><i className="fa-brands fa-google"></i></span>
                    <span>Google Login </span>
                </button>
                <button className='btn btn-style mx-auto d-block w-50 my-2'>
                    <span className='me-3'><i className="fa-brands fa-github"></i></span>
                    <span>Github Login</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;