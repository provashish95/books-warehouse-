import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <h2>manage inventory</h2>
            <p>This page will show all the inventory items. Will be more than 6 items. You will have more than six inventory items. On the home page, you will show 6. However, on the manage inventory page, you will show every item. Every item will show at least name and other information. And every item will have a delete button. This will delete the item. On the manage inventory page, you can show the inventory items the way you want. (however, you may consider showing the items in a tabular form)</p>

            <button onClick={() => navigate('/addNewInventory')} className='btn btn-info'>add new books</button>
        </div>
    );
};

export default ManageInventory;