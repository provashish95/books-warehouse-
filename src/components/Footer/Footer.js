import React from 'react';
import './Footer.css';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className='footer-style py-5'>
            <div className="container ">
                <div className="row g-3 justify-content-between py-5  ">
                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <div className='footer-text'>
                            <h6>ABOUT US</h6>
                            <p>Books warehouse that stores books & stationary items in a warehouse knows that effective management is the difference between fulfilling customer orders quickly and accurately while keeping costs down versus hearing complaints about delayed or inaccurate shipments and higher operating costs.</p>
                            <span><i className="fa-solid fa-envelope "></i> bookswarehouse@gmail.com</span>
                            <p><i className="fa-solid fa-phone"></i> 01632544810</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <div className='footer-text'>
                            <h6>ADDRESS</h6>
                            <p>Books Warehouse, Sukrabad-102 .Rose View Plaza (7th Floor, Room-808)
                                185 Elephant Road, Hatirpool
                                Dhaka-1205, Bangladesh</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <div className='footer-text'>
                            <h6 className='footer-text mx-3'>USEFUL LINK</h6>
                            <span className='mt-4'>
                                <i className="fa-brands fa-github icon-style"></i>
                                <i className="fa-brands fa-facebook icon-style"></i>
                                <i className="fa-brands fa-google icon-style"></i>
                                <i className="fa-brands fa-whatsapp icon-style"></i>
                                <i className="fa-brands fa-twitter icon-style"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className='footer-text' />
                <div className="row ">
                    <div className='col-12 '>
                        <div className="text-center footer-text">
                            &copy; Copyright {date} | Books Warehouse
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;