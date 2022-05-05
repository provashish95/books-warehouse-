import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '1px' }} className='bg-dark  w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button className='btn btn-outline-dark w-50 mx-auto d-block  my-2'>
                    <span><i class="fa-brands fa-google"></i></span>
                    <span>Google Login </span>
                </button>
                <button className='btn btn-outline-dark w-50 mx-auto d-block  my-2'>
                    <span><i class="fa-brands fa-github"></i></span>
                    <span>Github Login</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;