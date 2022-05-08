import React from 'react';
import './Stationary.css';

const Stationary = () => {


    const handleStationary = () => {
        console.log('hi');
    }
    return (
        <div className="container">
            <div className="row py-5">
                <h4 className='text-center text-color mb-5'>STATIONARY ITEMS</h4>
                <div className="card mx-auto border-style shadow-lg p-3 mb-5 bg-body" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/ykHYxY4/img-1.jpg" className="border-style img-fluid card-img-top" alt="..." />
                    <div className="card-body text-color text-center">
                        <p className="card-title text-white">NAME</p>
                    </div>
                </div>


                <div className="card mx-auto border-style shadow-lg p-3 mb-5 bg-body" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/ykHYxY4/img-1.jpg" className="border-style img-fluid card-img-top" alt="..." />
                    <div className="card-body text-color text-center">
                        <p className="card-title text-white">NAME</p>
                    </div>
                </div>


                <div className="card mx-auto border-style shadow-lg p-3 mb-5 bg-body" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/ykHYxY4/img-1.jpg" className="border-style img-fluid card-img-top" alt="..." />
                    <div className="card-body text-color text-center">
                        <p className="card-title text-white">NAME</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Stationary;