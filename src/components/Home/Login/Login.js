import React, { useState } from 'react';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [agree, setAgree] = useState(false);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSignIn = () => {
        signInWithGoogle();
    }

    if (user) {
        console.log(user.user.email, user.user.displayName);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('login');
        event.target.reset();
    }
    const handleRegister = (event) => {
        event.preventDefault();
        console.log('Register');
        event.target.reset();
    }

    return (
        <div className="container">
            <div className="row w-50 mx-auto my-5">
                <h5 className='text-center mb-5 text-color'>{agree ? "Registration" : "Login"}</h5>
                <div className="col">
                    {
                        agree ?
                            <>
                                <form onSubmit={handleRegister}>
                                    <div className="mb-3">
                                        <input type="text" className="w-100 rounded input-style py-2 px-2" id="exampleInputName" placeholder='Your Name' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="w-100 rounded input-style py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="w-100 rounded input-style py-2 px-2" id="exampleInputPassword1" placeholder='Password' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="w-100 rounded input-style py-2 px-2" id="exampleInputConfirmPassword1" placeholder='Confirm Password' required />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label text-color" htmlFor="exampleCheck1">Agree terms & condition</label>
                                    </div>
                                    <button type="submit" className='btn  btn-style mx-auto d-block'>Register</button>
                                </form>
                            </>
                            :
                            <>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <input type="email" className="w-100 rounded input-style py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="w-100 rounded input-style py-2 px-2" id="exampleInputPassword1" placeholder='Password' required />
                                    </div>
                                    <button type="submit" className='btn  btn-style mx-auto d-block'>Login</button>
                                </form>
                            </>
                    }
                    <p className='text-color mt-4'>{agree ? "Already have an account?" : "New to Warehouse ?"} <span onClick={() => setAgree(!agree)} className='btn text-color fst-italic fw-bold'> {agree ? "Please Login" : "Please Register"} </span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;