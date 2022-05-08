import React from 'react';

const TableRow = ({ book, handleDelete }) => {
    const { _id, name, price, quantity, description, supplierName } = book;
    return (
        <tr>
            <td>{name}</td>
            <td>{price} $</td>
            <td>{quantity} </td>
            <td>{description.slice(0, 15)}... </td>
            <td>{supplierName} </td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-outline-danger'>Delete</button></td>
        </tr>
    );
};

export default TableRow;