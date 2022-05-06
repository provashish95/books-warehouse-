import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Inventories = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id]);

    if (Object.keys(book).length === 0) {
        return <Loading></Loading>
    }
    console.log(book);

    return (
        <div className='container'>
            <h1>{book.name}</h1>
            <img src={book.img} alt="img" style={{ width: '300px' }} />
            <p>{book.description}</p>
            <p>Price: {book.price}</p>
            <p>Quantity: {book.quantity}</p>
            <p>Supplier Name: {book.supplierName}</p>

            <p>display detailed item information like id, name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named delivered. Once this button is clicked, it will reduce the quantity of the item by one. Make sure this data is saved on the database, and the change in quantity is displayed on the website.</p>
            <p>There will be a small form on the inventory/:id page. The from will say, restock the items. You will have an input field where you can put some numbers. And hitting the button will increase the quantity of the item.</p>


            <button onClick={() => navigate('/manageInventory')} className='btn btn-info'>Manage Inventories</button>
        </div>
    );
};

export default Inventories;