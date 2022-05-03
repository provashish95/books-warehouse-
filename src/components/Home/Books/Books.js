import React from 'react';
import Book from '../Book/Book';

const Books = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5 text-color'>BOOKS </h2>
            <div className="row">
                <Book></Book>
            </div>
        </div>
    );
};

export default Books;