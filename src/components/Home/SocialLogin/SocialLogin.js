import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true })
        }
    }, [googleUser]);

    useEffect(() => {
        if (githubUser) {
            navigate(from, { replace: true })
        }
    }, [githubUser]);

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleError || githubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }


    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '2px' }} className='footer-style w-50 rounded'></div>
                <p className='mt-2 px-2 text-color'>or</p>
                <div style={{ height: '2px' }} className='footer-style w-50 rounded'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-style mx-auto d-block w-50 my-2'>
                    <span className='me-3'><i className="fa-brands fa-google"></i></span>
                    <span>Google Login </span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-style mx-auto d-block w-50 my-2'>
                    <span className='me-3'><i className="fa-brands fa-github"></i></span>
                    <span>Github Login</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;