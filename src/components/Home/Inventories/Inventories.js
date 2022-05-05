import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventories = () => {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <h1>Inventories</h1>
            <p>display detailed item information like id, name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named delivered. Once this button is clicked, it will reduce the quantity of the item by one. Make sure this data is saved on the database, and the change in quantity is displayed on the website.</p>
            <p>There will be a small form on the inventory/:id page. The from will say, restock the items. You will have an input field where you can put some numbers. And hitting the button will increase the quantity of the item.</p>


            <button onClick={() => navigate('/manageInventory')} className='btn btn-info'>Manage Inventories</button>
        </div>
    );
};

export default Inventories;