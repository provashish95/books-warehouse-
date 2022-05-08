import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark  navbar-style">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    BOOKS WAREHOUSE
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <CustomLink className=" nav-link fs-6" aria-current="page" to="/">HOME</CustomLink>
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                    <CustomLink className=" nav-link" to="/manageInventory">MANAGE BOOKS</CustomLink>
                                    :
                                    " "
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                    <CustomLink className=" nav-link" to="/addNewInventory">ADD BOOK</CustomLink>
                                    :
                                    " "
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                    <CustomLink className=" nav-link" to="/myItems">MY BOOKS</CustomLink>
                                    :
                                    " "
                            }
                        </li>
                        <li className="nav-item">
                            <CustomLink className=" nav-link" to="/blogs">BLOGS</CustomLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {
                                user ?
                                    <CustomLink onClick={handleSignOut} className=" nav-link" to="/login">LOG OUT</CustomLink>
                                    :
                                    <CustomLink className=" nav-link" to="/login">LOGIN</CustomLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;