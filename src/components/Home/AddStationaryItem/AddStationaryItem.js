import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const AddStationaryItem = () => {
    const [user] = useAuthState(auth);

    const handleUpload = event => {
        event.preventDefault();
        const img = event.target.imgUrl.value;
        const email = user.email;
        fetch(' https://obscure-caverns-72360.herokuapp.com/stationaryItem', {
            method: 'POST',
            body: JSON.stringify({
                img, email
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
                <h5 className='text-center text-color my-4'>Add Stationary Item</h5>
                <div className="row mx-auto mb-5 w-50  px-3 py-5 bg-style rounded-3 width-sizing">
                    <div className="col">
                        <form onSubmit={handleUpload}>
                            <div className="mb-3">
                                <input type="text" name="imgUrl" className="w-100 rounded input-style py-2 px-2" id="exampleInputImgUrl" placeholder='Img Url' required />
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

export default AddStationaryItem;