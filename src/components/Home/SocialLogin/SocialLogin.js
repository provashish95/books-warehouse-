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
            const url = `http://localhost:5000/login`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: googleUser.user.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('accessToken', data.token);
                    navigate(from, { replace: true });
                });
        }
    }, [googleUser]);

    useEffect(() => {
        if (githubUser) {
            const url = `http://localhost:5000/login`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: githubUser.user.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('accessToken', data.token);
                    navigate(from, { replace: true });
                });
        }
    }, [githubUser]);

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleError || githubError) {
        errorElement = <p className='text-danger w-50 mx-auto'>Error: {googleError?.message} {githubError?.message}</p>
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
                <button onClick={() => signInWithGoogle()} className='btn btn-style w-50 mx-auto d-block my-2 py-2 width-sizing'>
                    <span className='me-2 fs-6'><i className="fa-brands fa-google"></i></span>
                    <span>Google Login </span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-style w-50 mx-auto d-block my-2 py-2 width-sizing'>
                    <span className='me-2 fs-6'><i className="fa-brands fa-github"></i></span>
                    <span>Github Login</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;