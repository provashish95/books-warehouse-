import React, { useEffect, useState } from 'react';
import useBooks from '../../../Hooks/useBooks';
import Book from '../Book/Book';
import { useNavigate } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data.slice(0, 6));
            })
    }, [])


    return (
        <div className='container '>
            <h4 className='text-center my-5 text-color'>BOOKS </h4>
            <div className="row">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            <button onClick={() => navigate('/manageInventory')} className='btn btn-info'>Manage Inventories</button>
        </div>
    );
};

export default Books;