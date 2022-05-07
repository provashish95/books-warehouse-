import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableRow from '../Books/TableRow/TableRow';
import Loading from '../Loading/Loading';

const ManageInventory = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
    }, [])

    if (books.length === 0) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete ? ");
        if (proceed) {
            const url = `http://localhost:5000/book/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = books.filter(book => book._id !== id);
                    setBooks(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col ">
                    <h5 className='text-center text-color mb-4 '>All Books</h5>
                    <div className='table-responsive'>
                        <table className="table table-hover border border-1 border-dark text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map(book => <TableRow key={book._id} book={book} handleDelete={handleDelete}></TableRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button onClick={() => navigate('/addNewInventory')} className='btn btn-info'>add new books</button>
        </div>
    );
};

export default ManageInventory;