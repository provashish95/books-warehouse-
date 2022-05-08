import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import TableRow from '../TableRow/TableRow';
import Loading from '../Loading/Loading';

const MyBooks = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        if (user !== null) {
            const url = `https://obscure-caverns-72360.herokuapp.com/myBooks`;
            fetch(url, {
                headers: {
                    'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                },
            })
                .then(res => res.json())
                .then(data => setMyBooks(data))
        }
    }, [user]);


    if (loading || error) {
        return <Loading></Loading>
    }
    if (myBooks.length === 0) {
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
                    const remaining = myBooks.filter(book => book._id !== id);
                    setMyBooks(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col ">
                    <h5 className='text-center text-color mb-4 '>My Books</h5>
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
                                    myBooks.map(book => <TableRow key={book._id} book={book} handleDelete={handleDelete}></TableRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <p className='text-end m-0 py-4'><button onClick={() => navigate('/addNewInventory')} className='btn custom-btn '>Add New Book</button></p> */}
        </div>
    );
};

export default MyBooks;