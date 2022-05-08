import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container">
            <h5 className='text-center text-color mb-5'>CONTACT US</h5>
            <div className="row justify-content-center align-items-enter py-5 g-3">
                <div className="col-sm-12 col-md-6 col-lg-6 mb-5 mx-auto">
                    <img src="https://i.ibb.co/Xzy2zC3/online-classes.jpg" alt="" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-5 mx-auto">
                    <form >
                        <div className="mb-3">
                            <input type="email" name="email" className="w-100 border border-dark form-style  py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                        </div>
                        <div className="form-floating mb-3">
                            <textarea name="description" className="form-style w-100 border border-dark px-2" placeholder="Write Your Message" id="floatingTextarea2" style={{ height: '100px' }} required></textarea>
                        </div>

                        <button type="submit" className='btn btn-style w-50 mx-auto d-block mb-5'>Sent</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;