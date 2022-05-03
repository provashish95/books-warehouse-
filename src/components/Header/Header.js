import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  navbar-style">
            <div className="container">
                <Link className="navbar-brand fs-2 " to="/">
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
                            <CustomLink className="  nav-link" to="/books">BOOKS</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className=" nav-link" to="/blogs">BLOGS</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className=" nav-link" to="/stationary">STATIONARY</CustomLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className=" nav-link" to="/login">LOGIN</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;