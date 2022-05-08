import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Inventories = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [isReload, setIsReload] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://obscure-caverns-72360.herokuapp.com/book/${id}`;
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
            fetch(`https://obscure-caverns-72360.herokuapp.com/updateQuantity/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updateQuantity }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsReload(!isReload);
                    // toast.success("Updated Quantity")
                });
        } else {
            toast.error("Product Sold out")
        }
    }

    const handleQuantityForm = event => {
        event.preventDefault();
        const { quantity } = book;
        const oldQuantity = parseInt(quantity);
        const newQuantity = parseInt(event.target.newQuantity.value);

        if (newQuantity > 0) {
            const updateQuantity = oldQuantity + newQuantity;

            fetch(`https://obscure-caverns-72360.herokuapp.com/updateQuantity/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updateQuantity }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsReload(!isReload);
                    event.target.reset();
                    toast.success("Quantity Added")
                });
        } else {
            toast.error("Negative/String Value Not Added")
        }

    }


    return (
        <div className='background-img'>
            <div className='container'>
                <div className="row py-5">
                    <div className="col-12 mt-4">
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
                                        <p className="text-center m-0 "> <button onClick={handleQuantity} className='btn btn-style '>{book.quantity === 0 ? "Sold Out" : "Delivery"}  </button></p>
                                    </div>
                                </div>
                                <div className="col-md-4 col align-self-center text-center mb-4">
                                    <h6 className='my-4'>Restock the item</h6>
                                    <form onSubmit={handleQuantityForm}>
                                        <div className="mb-3">
                                            <input type="text" name="newQuantity" className="w-50 rounded input-style py-2 px-2" placeholder='New quantity' required />
                                        </div>
                                        <button type="submit" className="btn btn-style me-2">Restock</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-end m-0 py-4'><button onClick={() => navigate('/manageInventory')} className='btn custom-btn '>Manage Inventories</button></p>

                <ToastContainer toastStyle={{
                    marginTop: "4rem",
                    borderRadius: "20px"
                }} />
            </div >
        </div>

    );
};

export default Inventories;