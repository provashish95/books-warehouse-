import React from 'react';
import './Footer.css';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <div className='footer-style p-5 text-center'>
            <span><i className="fa-brands fa-google icon-style"></i></span>
            <span ><i className="fa-brands fa-facebook icon-style"></i></span>
            <span ><i className="fa-brands fa-twitter icon-style"></i></span>
            <span ><i className="fa-brands fa-whatsapp icon-style"></i></span>
            <span ><i className="fa-brands fa-github icon-style"></i></span>
            <p className='text-center text-white text-muted mt-3'>&copy; Copyright {date} | Books Warehouse</p>
            <p className='text-center text-white text-muted'> Gain knowledge with Warehouse</p>
        </div>
    );
};

export default Footer;