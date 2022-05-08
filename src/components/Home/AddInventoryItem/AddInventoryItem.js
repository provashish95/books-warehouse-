import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);

    const handleUpload = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = user.email;
        const img = event.target.imgUrl.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;


        fetch('http://localhost:5000/uploadBook', {
            method: 'POST',
            body: JSON.stringify({
                name, img, description, price, quantity, supplierName, email
            }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success(data.success)
                event.target.reset()
            });
    }


    return (
        <div className='background-img'>
            <div className='container py-4'>
                <h5 className='text-center text-color my-4'>Add New Book</h5>
                <div className="row mx-auto mb-5 w-50  px-3 py-5 bg-style rounded-3 width-sizing">
                    <div className="col">
                        <form onSubmit={handleUpload}>
                            <div className="mb-3">
                                <input type="text" name="name" className="w-100 rounded input-style py-2 px-2" id="exampleInputName" placeholder='Name' required />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="imgUrl" className="w-100 rounded input-style py-2 px-2" id="exampleInputImgUrl" placeholder='Img Url' required />
                            </div>
                            <div className="form-floating">
                                <textarea name="description" className="input-style w-100 rounded px-2" placeholder="Description about book" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                            </div>
                            <div className="mb-3">
                                <input type="text" name="price" className="w-100 rounded input-style py-2 px-2" id="exampleInputPrice" placeholder='Price' required />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="quantity" className="w-100 rounded input-style py-2 px-2" id="exampleInputQuantity" placeholder='Quantity' required />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="supplierName" className="w-100 rounded input-style py-2 px-2" id="exampleInputSupplierName" placeholder='Supplier Name' required />
                            </div>
                            <button type="submit" className='btn  btn-style mx-auto d-block mb-5'>Add Book</button>
                        </form>
                        <ToastContainer toastStyle={{
                            marginTop: "4rem",
                            borderRadius: "20px"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInventoryItem;