import React from 'react';

const TableRow = ({ book, handleDelete }) => {
    const { _id, name, price, quantity } = book;
    return (
        <tr>
            <td>{name}</td>
            <td>{price} $</td>
            <td>{quantity} </td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-outline-danger'>Delete</button></td>
        </tr>
    );
};

export default TableRow;