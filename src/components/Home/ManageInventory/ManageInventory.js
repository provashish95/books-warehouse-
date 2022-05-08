import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableRow from '../TableRow/TableRow';
import Loading from '../Loading/Loading';

const ManageInventory = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://obscure-caverns-72360.herokuapp.com/allBooks`;
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
            const url = `https://obscure-caverns-72360.herokuapp.com/book/${id}`;
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
                            <thead className='text-color'>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Supplier Name</th>
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
            <p className='text-end m-0 py-4'><button onClick={() => navigate('/addNewInventory')} className='btn custom-btn '>Add New Book</button></p>
        </div>
    );
};

export default ManageInventory;