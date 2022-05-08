import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Book.css';

const Book = ({ book }) => {
    const navigate = useNavigate();
    const { name, description, price, quantity, supplierName, _id } = book;

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="card mx-auto shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <img src={book.img} className="card-img-top" alt="..." />
            <div className="card-body text-color">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.slice(0, 70)}...</p>
                <p className="card-text"><span className='fw-bold'>Price:</span> {price} $</p>
                <p className="card-text"><span className='fw-bold'>Quantity:</span> {quantity}</p>
                <p className="card-text"><span className='fw-bold'>Supplier Name:</span> {supplierName}</p>
                <button onClick={() => navigateToInventory(_id)} className='btn btn-style d-block mx-auto'>Manage</button>
            </div>
        </div>
    );
};

export default Book;