import React from 'react';
import './ContactUs.css';
import img from '../../../images/background/img.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
    const handleButton = (event) => {
        event.preventDefault();
        toast.error('Sent your mail')
        event.target.reset();
    }
    return (
        <div className="container">
            <h5 className='text-center text-color mb-5'>CONTACT US</h5>
            <div className="d-flex row py-5 align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6  px-5 order-2 order-lg-1 order-md-1 ">
                    <img src={img} className="img-fluid border rounded-2 shadow-lg" alt="img" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 px-5 mt-4 order-1 order-md-2 order-lg-2">
                    <form onSubmit={handleButton} className='mt-5'>
                        <div className="mb-3">
                            <input type="email" name="email" className="w-100 border border-dark form-style   py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                        </div>
                        <div className="form-floating mb-3">
                            <textarea name="description" className="form-style w-100 border border-dark px-2" placeholder="Write Your Message" id="floatingTextarea2" style={{ height: '100px' }} required></textarea>
                        </div>
                        <button type="submit" className='btn btn-style w-50 mx-auto d-block mb-5'>Sent</button>
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;