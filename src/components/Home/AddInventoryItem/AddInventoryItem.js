import React from 'react';

const AddInventoryItem = () => {
    return (
        <div className='container my-5'>
            <h5 className='text-center text-color my-4'>Add New Book</h5>
            <div className="row mx-auto  w-50 shadow-lg px-3 py-5 bg-style rounded-3">
                <div className="col">
                    <form >
                        <div className="mb-3">
                            <input type="text" className="w-100 rounded input-style py-2 px-2" id="exampleInputName" placeholder='Name' required />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="imgUrl" className="w-100 rounded input-style py-2 px-2" id="exampleInputImgUrl" placeholder='Img Url' required />
                        </div>
                        <div className="form-floating">
                            <textarea className="input-style w-100 rounded px-2" placeholder="Description about book" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
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
                </div>
            </div>
        </div>
    );
};

export default AddInventoryItem;