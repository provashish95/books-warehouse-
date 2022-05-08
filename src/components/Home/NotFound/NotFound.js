import React from 'react';
import img from '../../../images/background/404.jpg';

const NotFound = () => {
    return (
        <div className='text-center my-5' >
            <img src={img} alt="notFoundImg" className='errorImg img-fluid' />
            <h3 className='text-muted mb-4'>Sorry, The Page Not Found</h3>
            <p className='text-muted fw-bold mb-5'>The page you requested could not be found !</p>
        </div >
    );
};

export default NotFound;