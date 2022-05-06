import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Book.css';

const Book = ({ book }) => {
    const navigate = useNavigate();
    console.log(book);
    const handleBook = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="card mx-auto card-style  shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <img src={book.img} className="card-img-top" alt="..." />
            <div className="card-body text-color">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text">Price: {book.price}</p>
                <p className="card-text">Quantity: {book.quantity}</p>
                <p className="card-text">Supplier Name: {book.supplierName}</p>
                <button onClick={() => handleBook(book._id)} className='btn btn-style d-block mx-auto'>Manage</button>
            </div>
        </div>
    );
};

export default Book;