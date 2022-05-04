import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <section className=''>
            <div className="container px-4">
                <h5 className='text-center text-color py-5'>CATEGORIES</h5>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow  rounded p-3 border border-1 border-danger text-center category-style"><i className="fa-solid fa-book-medical"></i>  Medical</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger text-center  category-style"><i className="fa-solid fa-laptop-code"></i>  Engineering</div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger  text-center category-style"><i className="fa-solid fa-book-open"></i> Admission Books</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger text-center  category-style"><i className="fa-solid fa-book-journal-whills"></i>  Noble</div>
                    </div>
                </div>
                <div className="row g-3 mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger text-center category-style"><i className="fa-solid fa-book"></i>  Academic Books</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger text-center  category-style"><i className="fa-solid fa-coins"></i>  BBA</div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger  text-center category-style"><i className="fa-solid fa-briefcase-medical"></i> MBBS</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="shadow rounded p-3 border border-1 border-danger text-center  category-style"><i className="fa-solid fa-book-atlas"></i>  BCS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;