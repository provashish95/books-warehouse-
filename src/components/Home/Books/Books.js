import React from 'react';
import Book from '../Book/Book';

const Books = () => {
    return (
        <div className='container '>
            <h4 className='text-center my-5 text-color'>BOOKS </h4>
            <div className="row">
                <Book></Book>
            </div>
        </div>
    );
};

export default Books;