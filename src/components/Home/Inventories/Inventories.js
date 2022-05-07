import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';


const Inventories = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [isReload, setIsReload] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [isReload]);


    if (Object.keys(book).length === 0) {
        return <Loading></Loading>
    }

    const handleQuantity = () => {
        const { quantity } = book;
        const newQuantity = parseInt(quantity);

        if (newQuantity > 0) {
            const updateQuantity = newQuantity - 1;
            fetch(`http://localhost:5000/updateQuantity/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updateQuantity }),
            })
                .then((res) => res.json())
                .then((data) => setIsReload(!isReload));
        }
    }

    const handleQuantityForm = event => {
        event.preventDefault();
        const newQuantity = event.target.newQuantity.value;
        console.log(newQuantity);
    }


    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-12">
                    <div className="card mb-3" >
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4  text-center py-5">
                                <img src={book.img} className="img-fluid rounded" alt="..." />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">{book.name}</h5>
                                    <p className="card-text">{book.description}</p>
                                    <p className="card-text"><small className="text-muted">price: {book.price}</small></p>
                                    <p className="card-text"><small className="text-muted">Quantity: {book.quantity}</small></p>
                                    <p className="card-text"><small className="text-muted">Supplier Name: {book.supplierName}</small></p>
                                </div>
                            </div>
                            <div className="col-md-4  text-center py-5">
                                <form onSubmit={handleQuantityForm}>
                                    <div className="mb-3">
                                        <input type="text" name="newQuantity" className="w-50 rounded input-style py-2 px-2" />
                                    </div>
                                    <button type="submit" className="btn btn-style me-2">Restock</button>
                                    <button onClick={handleQuantity} className='btn btn-style'>Delivery</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/manageInventory')} className='btn btn-info'>Manage Inventories</button>
        </div >
    );
};

export default Inventories;