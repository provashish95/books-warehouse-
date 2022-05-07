import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooks(data.slice(0, 6));
            })
    }, [])

    if (books.length === 0) {
        return <Loading></Loading>
    }

    return (
        <div className='container '>
            <h4 className='text-center my-5 text-color'>BOOKS </h4>
            <div className="row">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
            <button onClick={() => navigate('/manageInventory')} className='btn btn-info'>Manage Inventories</button>
        </div>
    );
};

export default Books;