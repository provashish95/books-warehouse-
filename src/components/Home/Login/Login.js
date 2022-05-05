import React, { useEffect, useState } from 'react';
import './Login.css';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [agree, setAgree] = useState(false);
    const [userError, setUserError] = useState(' ');
    const [
        createUserWithEmailAndPassword,
        registerUser,
        registerLoading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;


    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password.length < 6) {
            setUserError('Password must be 6 character!');
        } else if (password !== confirmPassword) {
            setUserError('Password not matched');
        } else {
            setUserError('')
            createUserWithEmailAndPassword(email, password)
            event.target.reset();
        }
    }

    if (registerError) {
        errorElement = <p className='text-danger '>Error: {registerError?.message}</p>
    }

    useEffect(() => {
        if (registerUser) {
            console.log(registerUser);
        }
    }, [registerUser]);


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
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
                                        <input type="email" name="email" className="w-100 rounded input-style py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name="password" className="w-100 rounded input-style py-2 px-2" id="exampleInputPassword1" placeholder='Password' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name="confirmPassword" className="w-100 rounded input-style py-2 px-2" id="exampleInputConfirmPassword1" placeholder='Confirm Password' required />
                                    </div>
                                    <p className="text-danger ">{userError || ''}</p>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label text-color" htmlFor="exampleCheck1">Agree terms & condition</label>
                                    </div>
                                    <button type="submit" className='btn  btn-style mx-auto d-block'>Register</button>
                                    {errorElement}
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